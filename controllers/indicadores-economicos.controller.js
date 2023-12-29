const { handleHttpError } = require("../utils/handleError");
const { indicadoresEconomicosModel } = require("../models");
const optionsPaginate = require("../config/paginationParams");



const addIndEconomicos = async (req, res) => {
  try {
    res.render('partials/indicadoresEconomicos/add')
  } catch (e) {
    handleHttpError(res, e);
  }
};

const editIndEconomicos = async (req, res) => {
  try {
    //req = matchedData(req); //revisar funcionamiento
    const { id } = req.params;
    const data = await indicadoresEconomicosModel.findById(id);
    res.render('partials/indicadoresEconomicos/edit', { data })
  } catch (e) {
    handleHttpError(res, e);
  }
};

const getIndEconomicos = async (req, res) => {
  try {
    const data = await indicadoresEconomicosModel.find({});
    console.log(data)
    res.render('partials/indicadoresEconomicos/list', { data })
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
    const response = await indicadoresEconomicosModel.create(req.body);
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

module.exports = { getIndEconomicos, addIndEconomicos, editIndEconomicos, create };