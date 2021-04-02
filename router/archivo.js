const express = require('express');
const archivo = require('../controllers/archivo.controller');

const router = express.Router();

router.get('/', archivo.obtenerArchivos);

router.get('/:id', archivo.obtenerArchivo);

router.post('/', archivo.agregarArchivo);

router.put('/:id', archivo.editarArchivo);

router.delete('/:id', archivo.eliminarArchivo);

module.exports = router;