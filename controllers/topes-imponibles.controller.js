const { handleHttpError } = require("../utils/handleError");
const { topesImponiblesModel } = require("../models");
const optionsPaginate = require("../config/paginationParams");



const addTopesImponibles = async (req, res) => {
  try {
    res.render('partials/topesimponibles/add')
  } catch (e) {
    handleHttpError(res, e);
  }
};

const editTopesImponibles = async (req, res) => {
  try {
    //req = matchedData(req); //revisar funcionamiento
    const { id } = req.params;
    const data = await topesImponiblesModel.findById(id);
    res.render('partials/topesimponibles/edit', { data })
  } catch (e) {
    handleHttpError(res, e);
  }
};

const getTopesImponibles = async (req, res) => {
  console.log('muestyra todas las topesimponibles disponibles');
  try {
    const data = await topesImponiblesModel.find({});
    console.log(data)
    res.render('partials/topesimponibles/list', { data })
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

module.exports = { getTopesImponibles, addTopesImponibles, editTopesImponibles };