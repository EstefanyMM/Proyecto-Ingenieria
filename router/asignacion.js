const express = require('express');
const asignacion = require('../controllers/asignacion.controller');

const router = express.Router();

router.get('/', asignacion.obtenerAsignaciones);

router.get('/:id', asignacion.obtenerAsignacion);

router.post('/', asignacion.agregarAsignacion);

router.put('/:id', asignacion.editarAsignacion);

router.delete('/:id', asignacion.eliminarAsignacion);

module.exports = router;