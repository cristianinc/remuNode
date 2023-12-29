const express = require('express');
const router = express.Router(); 
const  { create } = require('../controllers/impuesto-segunda-categoria.controller');

router.post("/", create);

module.exports = router;