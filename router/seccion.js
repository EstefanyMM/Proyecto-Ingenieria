const express = require('express');
const seccion = require('../controllers/seccion.controller');
const router = express.Router();


router.get('/', seccion.obtenerSecciones);

router.get('/:id', seccion.obtenerSeccion);

router.post('/', seccion.agregarSeccion);

router.put('/:id', seccion.editarSeccion);

router.delete('/:id', seccion.eliminarSeccion);

 //router.get('/idioma/:id', seccion.getIdiomasPorSeccion);


module.exports = router;