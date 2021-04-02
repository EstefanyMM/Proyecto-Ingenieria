const express = require('express');
const matricula = require('../controllers/matricula.controller');

const router = express.Router();

router.get('/', matricula.getMatriculas);

router.get('/:id', matricula.getMatricula);

router.post('/', matricula.agregarMatricula);

router.put('/:id', matricula.editarMatricula);

router.delete('/:id', matricula.eliminarMatricula);

module.exports = router;