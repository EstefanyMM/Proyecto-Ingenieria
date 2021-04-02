const express = require('express');
const {obtenerCorreos, editarCorreo, agregarCorreo, eliminarCorreo, obtenerCorreo} = require('../controllers/correo.controller');

const router = express.Router();

router.get('/', obtenerCorreos);

router.get('/:id', obtenerCorreo);

router.post('/', agregarCorreo);

router.put('/:id', editarCorreo);

router.delete('/:id', eliminarCorreo);

module.exports = router;