const express = require('express');
const router = express.Router(); 
const  { getAfp, addAfp, editAfp  } = require('../controllers/afp.controller')
const  { getAsigFamiliar, addAsigFamiliar, editAsigFamiliar  } = require('../controllers/asignacion-familiar.controller')
const  { getEmpresa, addEmpresa, editEmpresa  } = require('../controllers/empresa.controller')
const  { getImpSegCat, addImpSegCat, editImpSegCat  } = require('../controllers/impuesto-segunda-categoria.controller')
const  { getIndEconomicos, addIndEconomicos, editIndEconomicos  } = require('../controllers/indicadores-economicos.controller')
const  { getRentaImponible, addRentaImponible, editRentaImponible  } = require('../controllers/renta-imponible.controller')
const  { getSalud, addSalud, editSalud  } = require('../controllers/salud.controller')
const  { getSeguroCesantia, addSeguroCesantia, editSeguroCesantia  } = require('../controllers/seguro-cesantia.controller')
const  { getTipoContrato, addTipoContrato, editTipoContrato  } = require('../controllers/tipo-contrato.controller')
const  { getTopesImponibles, addTopesImponibles, editTopesImponibles  } = require('../controllers/topes-imponibles.controller')
const  { getTrabajador, addTrabajador, editTrabajador  } = require('../controllers/trabajador.controller')
const  { addLiquidacion, editLiquidacion } = require('../controllers/liquidacion.controller')


router.get("/afp", getAfp);
router.get("/afp/add", addAfp);
router.get("/afp/edit/:id", editAfp);

router.get("/asignacion-familiar", getAsigFamiliar);
router.get("/asignacion-familiar/add", addAsigFamiliar);
router.get("/asignacion-familiar/edit/:id", editAsigFamiliar);

router.get("/empresa", getEmpresa);
router.get("/empresa/add", addEmpresa);
router.get("/empresa/edit/:id", editEmpresa);

router.get("/impuesto-segunda-categoria", getImpSegCat);
router.get("/impuesto-segunda-categoria/add", addImpSegCat);
router.get("/impuesto-segunda-categoria/edit/:id", editImpSegCat);

router.get("/indicadores-economicos", getIndEconomicos);
router.get("/indicadores-economicos/add", addIndEconomicos);
router.get("/indicadores-economicos/edit/:id", editIndEconomicos);

router.get("/renta-imponible", getRentaImponible);
router.get("/renta-imponible/add", addRentaImponible);
router.get("/renta-imponible/edit/:id", editRentaImponible);

router.get("/salud", getSalud);
router.get("/salud/add", addSalud);
router.get("/salud/edit/:id", editSalud);

router.get("/seguro-cesantia", getSeguroCesantia);
router.get("/seguro-cesantia/add", addSeguroCesantia);
router.get("/seguro-cesantia/edit/:id", editSeguroCesantia);

router.get("/tipo-contrato", getTipoContrato);
router.get("/tipo-contrato/add", addTipoContrato);
router.get("/tipo-contrato/edit/:id", editTipoContrato);

router.get("/topes-imponibles", getTopesImponibles);
router.get("/topes-imponibles/add", addTopesImponibles);
router.get("/topes-imponibles/edit/:id", editTopesImponibles);

router.get("/trabajador", getTrabajador);
router.get("/trabajador/add", addTrabajador);
router.get("/trabajador/edit/:id", editTrabajador);

router.get("/liquidacion", addLiquidacion);
router.get("/liquidacion/edit/:id", editLiquidacion);
module.exports = router;