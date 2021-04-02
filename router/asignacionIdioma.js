const express = require('express');
const asignacionIdioma = require('../controllers/asignacionIdioma.controller');
const router = express.Router();


router.get('/', asignacionIdioma.obtenerAsignacionIdiomas);

router.get('/:id', asignacionIdioma.obtenerAsignacionIdioma);

router.post('/', asignacionIdioma.agregarAsignacionIdioma);

router.put('/:id', asignacionIdioma.editarAsignacionIdioma);

router.delete('/:id', asignacionIdioma.eliminarAsignacionIdioma);

module.exports = router;