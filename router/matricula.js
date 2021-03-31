const express = require('express');
const matricula = require('../controllers/matricula.controller');
const router = express.Router();


router.get('/', matricula.getMatriculas);

router.get('/:id', matricula.getMatricula);

router.post('/', matricula.agregarMatricula);

router.put('/', matricula.editarMatricula);

router.delete('/', matricula.eliminarMatricula);

 //router.get('/idioma/:id', estudiante.getIdiomasPorEstudiante);


module.exports = router;