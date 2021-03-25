const express = require('express');
const { getUsuarios, editarUsuario, agregarUsuario, eliminarUsuario, getUsuario} = require('../controllers/usuario.controller');
const router = express.Router();


router.get('/', getUsuarios);

router.get('/:id', getUsuario);

router.post('/', agregarUsuario);

router.put('/', editarUsuario);

router.delete('/', eliminarUsuario);

module.exports = router;