const express = require('express');
const estudiante = require('../controllers/estudiante.controller');
const router = express.Router();


router.get('/', estudiante.obtenerEstudiantes);

router.get('/:id', estudiante.obtenerEstudiante);

router.post('/', estudiante.agregarEstudiante);

router.put('/', estudiante.editarEstudiante);

router.delete('/', estudiante.eliminarEstudiante);

 router.get('/idioma/:id', estudiante.getIdiomasPorEstudiante);


module.exports = router;