const express = require('express');
const router = express.Router(); 
const  { create } = require('../controllers/topes-imponibles.controller');

router.post("/", create);

module.exports = router;