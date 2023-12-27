const { handleHttpError } = require("../utils/handleError");
const { registroHuellasModel } = require("../models");
const optionsPaginate = require("../config/paginationParams");


const findOne = async (req, res) => {
  try {

    //req = matchedData(req); //revisar funcionamiento
    const { id } = req.params;
    console.log('by Id', id );
    const data = await registroHuellasModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const findAll = async (req, res) => {
  try {
    // const [, options] = optionsPaginate(req)
    // const data = await registroHuellasModel.paginate({}, options);
    // res.send({ data });\

    console.log('Servicio Operativo');
    res.status(500).json({ ok: 'OK' })


  } catch (e) {
    handleHttpError(res, e);
  }
};

const create = async (req, res) => {
  try {
    const response = await registroHuellasModel.create(req.body);
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
      console.log( "esta es la data del Payload", data )
      const response = await registroHuellasModel.findByIdAndUpdate(_id, data, { new: true });
      res.status(200).json({ response })
    } catch (e) {
      handleHttpError(res, e);
    }
  };

const remove = async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await registroHuellasModel.findByIdAndUpdate(_id, { deleted: false }, { new: true });
    res.status(200).json({ response })
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = { findOne, findAll, create, update, remove };