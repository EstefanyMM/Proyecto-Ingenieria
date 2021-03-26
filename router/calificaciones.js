const express = require('express');
const { getCalificaciones, getCalificacion, agregarCalificaciones, editarCalificaciones, 
        eliminarCalificaciones } = require('../controllers/calificaciones.controller');

const router = express.Router();

router.get('/', getCalificaciones);

router.get('/:id', getCalificacion);

router.post('/', agregarCalificaciones);

router.put('/', editarCalificaciones);

router.delete('/', eliminarCalificaciones);

//router.get('/idioma/:id', getIdiomasPorEstudiante);


module.exports = router;