const express = require('express');
const { getPersonas, getPersona, agregarPersona, editarPersona, eliminarPersona, getIdiomasPorEstudiante } = require('../controllers/persona.controller');

const router = express.Router();

router.get('/', getPersonas);

router.get('/:id', getPersona);

router.post('/', agregarPersona);

router.put('/', editarPersona);

router.delete('/', eliminarPersona);

router.get('/idioma/:id', getIdiomasPorEstudiante);


module.exports = router;

