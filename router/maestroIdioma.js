const express = require('express');
const maestroIdioma = require('../controllers/maestroIdioma.controller');
const router = express.Router();


router.get('/', maestroIdioma.obtenerMaestroIdiomas);

router.get('/:id', maestroIdioma.obtenerMaestroIdioma);

router.post('/', maestroIdioma.agregarMaestroIdioma);

router.put('/:id', maestroIdioma.editarMaestroIdioma);

router.delete('/:id', maestroIdioma.eliminarMaestroIdioma);

module.exports = router;