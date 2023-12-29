const express = require('express');
const router = express.Router(); 
const  { create } = require('../controllers/renta-imponible.controller');

router.post("/", create);

module.exports = router;