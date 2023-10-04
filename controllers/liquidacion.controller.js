const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { liquidacionModel, empresaModel, trabajadorModel, gratificacionModel, afpModel, saludModel, seguroCesantiaModel, impuestoSegundaCategoriaModel } = require("../models");
const optionsPaginate = require("../config/paginationParams");


const findOne = async (req, res) => {
  try {

    req = matchedData(req);
    const id = req.id;
    const data = await trabajadorModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const findAll = async (req, res) => {

  const data = await trabajadorModel.find({});
  let mes  = 6;
  let anio = 2023;
  let liquidacion = [];
    // for( const prop in data ){
    //   let rut = data[prop].rut;
    //   let dataLiquidacion = await generaLiquidacion( mes, anio, rut );
    //   liquidacion.push( dataLiquidacion );
    // }
    // dataLiq = { liquidacion : liquidacion }
    // console.log(JSON.stringify(dataLiq));

    res.render('liquidacion', { liquidacion })

};

const create = async (req, res) => {
  try {
    const { mes, anio, rut } = req.body;
    const liquidacion = await generaLiquidacion(  mes, anio, rut  );

    return res.json({ liquidacion });

  } catch (e) {
    handleHttpError(res, e);
  }
};

const update = async (req, res) => {
    try {
      const { file } = req;
      const body = {
        url: `${URL_PUBLIC}/${file.filename}`,
        filename: file.filename,
      };
      const response = await trabajadorModel.create(body);
      res.send({ response });
    } catch (e) {
      handleHttpError(res, e);
    }
  };

const remove = async (req, res) => {
  try {
    req = matchedData(req);
    const id = req.id;
    const findMedia = await trabajadorModel.findById(id);
    const fileName = findMedia.filename;
    await trabajadorModel.delete({ _id: id });
    fs.unlinkSync(`${MEDIA_PATH}/${fileName}`);

    const data = {
      findMedia: fileName,
      deleted: true,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const generaLiquidacion = async (mes, anio, rut) => {

  const { nombre: nombreEmpresa, rut: rutEmpresa, direccion: direccionEmpresa } = await empresaModel.findOne();
  const empresa = { nombre: nombreEmpresa, rut: rutEmpresa, direcccion: direccionEmpresa };
  const fecha_liquidacion = { mes, anio };
  const { nombre: nombreTrabajador, rut: rutTrabajador, fecha_ingreso, sueldoBase, cargo, tipoContrato, afp, salud } = await trabajadorModel.findOne({ "rut": rut });
  const trabajador = { nombreTrabajador, rutTrabajador, fecha_ingreso, cargo, tipoContrato};
  const { monto: gratificacionLegal } = await gratificacionModel.findOne();
  const descuentos_imponibles = { sueldo_base: sueldoBase, bono_responsabilidad: 70000, bono_asistencia: 35000, horas_extras: 46200};
  const gratificacion = await calculoGratificacion( gratificacionLegal, descuentos_imponibles)
  descuentos_imponibles.gratificacion = gratificacion;
  const total_descuentos_imponibles = await calculoDescuentosLegales(descuentos_imponibles); //imponibles
  const descAFP = await calculoAFP( afp, total_descuentos_imponibles );
  const descSalud = await calculoSalud( salud, total_descuentos_imponibles );
  const descSegCesantia = await calculoSeguroCesantia( tipoContrato, total_descuentos_imponibles );
  const descuentos_legales = { afp: descAFP, salud: descSalud, seguroCesantia: descSegCesantia, caja_compensacion:0, sindicato:0, impuesto_renta:0 };
  
  const descImpRenta = await calculoImpuestoRenta(total_descuentos_imponibles, descuentos_legales);
  descuentos_legales.impuesto_renta = descImpRenta;
  const total_descuentos_legales = await calculoDescuentosLegales(descuentos_legales);

  const descuentos_no_imponibles = {};
  const total_descuetos_no_imponibles = 0;
  const saldo_liquido = total_descuentos_imponibles - total_descuentos_legales;
  return  {
    empresa,
    fecha_liquidacion,
    trabajador,
    descuentos_imponibles,
    total_descuentos_imponibles,
    descuentos_no_imponibles,
    total_descuetos_no_imponibles,
    descuentos_legales,
    total_descuentos_legales,
    saldo_liquido,
  };

};

const calculoGratificacion = async (gratificacionLegal, desc_imp) => {

  let sueldo_minimo = 440000; //obtener de las rentas imponibles  
  let total_descuentos_imponibles = 0;
  for( const prop in desc_imp ){
    total_descuentos_imponibles += desc_imp[prop];
  }
  
  let calculo25porc = total_descuentos_imponibles * 0.25;
  let calculo475 = (sueldo_minimo * gratificacionLegal)/12;
  
  if(calculo25porc < calculo475){
    return Math.round(calculo25porc);
  }else{
    return Math.round(calculo475);
  }

};

const calculoDescuentosLegales = async (desc_imp) => {

  let total = 0;
  for( const prop in desc_imp ){
    total += desc_imp[prop];
  }

  return total;
};

const calculoAFP = async (afp, total_desc_imp) => {
  const { tasa_dependientes } = await afpModel.findOne({ "nombre": afp });
  let total = (total_desc_imp * tasa_dependientes)/100;
  return Math.round(total);
};

const calculoSalud = async (salud, total_desc_imp) => {
  const { tasa } = await saludModel.findOne({ "nombre": salud });
  let total = (total_desc_imp * tasa)/100;
  return Math.round(total);
};

const calculoSeguroCesantia = async (tipoContrato, total_desc_imp) => {
  const { trabajador } = await seguroCesantiaModel.findOne({ "tipoContrato": tipoContrato });
  let total = (total_desc_imp * trabajador)/100;
  return Math.round(total);
};

const calculoImpuestoRenta = async (total_desc_imp, total_desc_legal) => {
try {
  const total_desc =  await calculoDescuentosLegales(total_desc_legal);
  const monto = total_desc_imp - total_desc;
  const { factor, cantidadRebajar } = await impuestoSegundaCategoriaModel.findOne({
    $and: [
            { valorHasta: { $gte : monto}},
            { valorDesde: { $lte : monto}}
        ]
    });
    const impuesto = ( monto * factor ) - cantidadRebajar;
    return Math.round(impuesto);
  } catch (error) {
    console.log(error)
  }
};

module.exports = { findOne, findAll, create, update, remove };