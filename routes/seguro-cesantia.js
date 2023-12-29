const express = require('express');
const router = express.Router(); 
const  { create } = require('../controllers/seguro-cesantia.controller');

router.post("/", create);

module.exports = router;