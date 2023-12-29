const express = require('express');
const router = express.Router(); 
const  { create } = require('../controllers/indicadores-economicos.controller');

router.post("/", create);

module.exports = router;