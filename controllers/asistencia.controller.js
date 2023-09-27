const fs = require("fs");
const { handleHttpError } = require("../utils/handleError");


const URL_PUBLIC = process.env.URL_PUBLIC || null;
const MEDIA_PATH = `${__dirname}/../storage`;

const loadAttendance = async (req, res) => {
    console.log( "asdfdsnfasdhfkjlasklfjhfklhklasdfklhask" )
    try {
        const { filename } = req.file;
        console.log('------------>', filename)

        const body = {
          url: `${URL_PUBLIC}/${filename}`,
          filename: filename,
        };
        
        res.send({ load:'Carga con éxito' })
      } catch (e) {
        handleHttpError(res, e);
      }
};

 const readFile = async (req, res) => {
 
};

// const findOne = async (req, res) => {
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

module.exports = { loadAttendance, readFile };