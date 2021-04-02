const express = require('express');
const { getPersonas, editarPersona, agregarPersona, eliminarPersona, getPersona} = require('../controllers/persona.controller');

const router = express.Router();

router.get('/', getPersonas);

router.get('/:id', getPersona);

router.post('/', agregarPersona);

router.put('/:id', editarPersona);

router.delete('/:id', eliminarPersona);

module.exports = router;