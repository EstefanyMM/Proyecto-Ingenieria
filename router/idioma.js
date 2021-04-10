const express = require('express');
const idioma = require('../controllers/idioma.controller');
const router = express.Router();


router.get('/', idioma.obtenerIdiomas);

router.get('/:id', idioma.getIdioma);

router.post('/', idioma.agregarIdioma);

router.put('/:id', idioma.editarIdioma);

router.delete('/:id', idioma.eliminarIdioma);

router.get('/asignacion/:id', idioma.getAsignacionesporIdioma);

router.get('/archivo/:id', idioma.getArchivoporIdioma);

router.post('/archivo/:id', idioma.agregarTarea);


module.exports = router;