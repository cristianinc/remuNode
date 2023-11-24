const express = require('express');
const router = express.Router(); 
const  { findAll, update } = require('../controllers/asignacion-familiar.controller');

// router.post("/", create);
router.get("/", findAll);
// router.get("/:id", findOne);
router.put("/:id", update);
// router.delete("/:id", remove);


module.exports = router;