const express = require('express');
const router = express.Router(); 
const { upload } = require("../utils/handleStore");
const  { loadAttendance } = require('../controllers/asistencia.controller')

router.post("/loadAttendance", upload.single("controlAsistencia"), loadAttendance);

router.post("/readFile",  readFile);



module.exports = router;