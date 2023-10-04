const express = require('express');
const router = express.Router(); 
const  { getAfp, addAfp, editAfp  } = require('../controllers/afp.controller')


router.get("/afp", getAfp);
router.get("/add-afp", addAfp);
router.get("/edit-afp/:id", editAfp);



module.exports = router;