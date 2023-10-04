const { handleHttpError } = require("../utils/handleError");
const { asignacionFamiliarModel } = require("../models");
const optionsPaginate = require("../config/paginationParams");



const addAsigFamiliar = async (req, res) => {
  try {
    res.render('partials/asignacionFamiliar/add')
  } catch (e) {
    handleHttpError(res, e);
  }
};

const editAsigFamiliar = async (req, res) => {
  try {
    //req = matchedData(req); //revisar funcionamiento
    const { id } = req.params;
    const data = await asignacionFamiliarModel.findById(id);
    res.render('partials/asignacionFamiliar/edit', { data })
  } catch (e) {
    handleHttpError(res, e);
  }
};

const getAsigFamiliar = async (req, res) => {
  try {
    const data = await asignacionFamiliarModel.find({});
    console.log(data)
    res.render('partials/asignacionFamiliar/list', { data })
  } catch (e) {
    handleHttpError(res, e);
  }
};


// const findOne = async (req, res) => {
//   try {

//     //req = matchedData(req); //revisar funcionamiento
//     const { id } = req.params;
//     console.log('by Id', id );
//     const data = await trabajadorModel.findById(id);
//     res.send({ data });
//   } catch (e) {
//     handleHttpError(res, e);
//   }
// };

// const findAll = async (req, res) => {
//   try {
//     const [, options] = optionsPaginate(req)
//     const data = await trabajadorModel.paginate({}, options);
//     res.send({ data });
//   } catch (e) {
//     handleHttpError(res, e);
//   }
// };

// const create = async (req, res) => {
//   try {
//     const { file } = req;
//     const body = {
//       url: `${URL_PUBLIC}/${file.filename}`,
//       filename: file.filename,
//     };
//     const response = await trabajadorModel.create(body);
//     res.send({ response });
//   } catch (e) {
//     handleHttpError(res, e);
//   }
// };

// const update = async (req, res) => {
//     try {
//       const { file } = req;
//       const body = {
//         url: `${URL_PUBLIC}/${file.filename}`,
//         filename: file.filename,
//       };
//       const response = await trabajadorModel.create(body);
//       res.send({ response });
//     } catch (e) {
//       handleHttpError(res, e);
//     }
//   };

// const remove = async (req, res) => {
//   try {
//     req = matchedData(req);
//     const id = req.id;
//     const findMedia = await trabajadorModel.findById(id);
//     const fileName = findMedia.filename;
//     await trabajadorModel.delete({ _id: id });
//     fs.unlinkSync(`${MEDIA_PATH}/${fileName}`);

//     const data = {
//       findMedia: fileName,
//       deleted: true,
//     };

//     res.send({ data });
//   } catch (e) {
//     handleHttpError(res, e);
//   }
// };

module.exports = { getAsigFamiliar, addAsigFamiliar, editAsigFamiliar };