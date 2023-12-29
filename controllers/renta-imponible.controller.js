const { handleHttpError } = require("../utils/handleError");
const { rentaImponibleModel } = require("../models");
const optionsPaginate = require("../config/paginationParams");



const addRentaImponible = async (req, res) => {
  try {
    res.render('partials/rentaImponible/add')
  } catch (e) {
    handleHttpError(res, e);
  }
};

const editRentaImponible = async (req, res) => {
  try {
    //req = matchedData(req); //revisar funcionamiento
    const { id } = req.params;
    const data = await rentaImponibleModel.findById(id);
    res.render('partials/rentaImponible/edit', { data })
  } catch (e) {
    handleHttpError(res, e);
  }
};

const getRentaImponible = async (req, res) => {
  console.log('muestyra todas las afp disponibles');
  try {
    const data = await rentaImponibleModel.find({});
    console.log(data)
    res.render('partials/rentaImponible/list', { data })
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

const create = async (req, res) => {
  try {
    const response = await rentaImponibleModel.create(req.body);
    res.status(200).json({ response })
  } catch (e) {
    handleHttpError(res, e);
  }
};

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

module.exports = { getRentaImponible, addRentaImponible, editRentaImponible, create };