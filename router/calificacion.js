const express = require('express');
const calificacion = require('../controllers/calificacion.controller');

const router = express.Router();

router.get('/', calificacion.getCalificaciones);

router.get('/:id', calificacion.getCalificacion);

router.post('/', calificacion.agregarCalificaciones);

router.put('/:id', calificacion.editarCalificaciones);

router.delete('/:id', calificacion.eliminarCalificaciones);

module.exports = router;