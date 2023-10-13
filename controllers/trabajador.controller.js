const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { trabajadorModel, afpModel, saludModel, tipoContratoModel } = require("../models");
const optionsPaginate = require("../config/paginationParams");

const addTrabajador = async (req, res) => {
  try {
    const afp = await afpModel.find({});
    const salud = await saludModel.find({});
    const tipoContrato = await tipoContratoModel.find({});
    res.render('partials/trabajador/add', { afp, salud, tipoContrato })
  } catch (e) {
    handleHttpError(res, e);
  }
};

const editTrabajador = async (req, res) => {
  try {
    const { id } = req.params;
    const trabajador = await trabajadorModel.findById(id);
    const afp = await afpModel.find({});
    const salud = await saludModel.find({});
    const tipoContrato = await tipoContratoModel.find({});    
    res.render('partials/trabajador/edit', { trabajador, afp, salud, tipoContrato })
  } catch (e) {
    handleHttpError(res, e);
  }
};

const getTrabajador = async (req, res) => {
  console.log('muestyra todas las trabajador disponibles');
  try {
    const data = await trabajadorModel.find({});
    console.log(data)
    res.render('partials/trabajador/list', { data })
  } catch (e) {
    handleHttpError(res, e);
  }
};

const findOne = async (req, res) => {
  try {

    //req = matchedData(req); //revisar funcionamiento
    const { id } = req.params;
    console.log('by Id', id );
    const data = await trabajadorModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const findAll = async (req, res) => {
  try {
    const [, options] = optionsPaginate(req)
    const data = await trabajadorModel.paginate({}, options);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const create = async (req, res) => {
  try {
    const response = await trabajadorModel.create(req.body);
    res.status(200).json({ response })
  } catch (e) {
    handleHttpError(res, e);
  }
};


//Faltan las validaciones correspondientes
const update = async (req, res) => {
    try {
      const _id = req.params.id;
      const data = req.body;
      const response = await trabajadorModel.findByIdAndUpdate(_id, data, { new: true });
      res.status(200).json({ response })
    } catch (e) {
      handleHttpError(res, e);
    }
  };

const remove = async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await trabajadorModel.findByIdAndUpdate(_id, { deleted: false }, { new: true });
    res.status(200).json({ response })
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = { findOne, findAll, create, update, remove, addTrabajador, editTrabajador, getTrabajador };