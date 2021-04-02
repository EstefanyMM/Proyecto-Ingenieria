const express = require('express');
const archivoIdioma = require('../controllers/archivoIdioma.controller');
const router = express.Router();


router.get('/', archivoIdioma.obtenerArchivoIdiomas);

router.get('/:id', archivoIdioma.obtenerArchivoIdioma);

router.post('/', archivoIdioma.agregarArchivoIdioma);

router.put('/:id', archivoIdioma.editarArchivoIdioma);

router.delete('/:id', archivoIdioma.eliminarArchivoIdioma);

module.exports = router;