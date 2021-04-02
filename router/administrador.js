const express = require('express');
const administrador = require('../controllers/administrador.controller');

const router = express.Router();


router.get('/', administrador.obtenerAdministradors);

router.get('/:id', administrador.obtenerAdministrador);

router.post('/', administrador.agregarAdministrador);

router.put('/:id', administrador.editarAdministrador);

router.delete('/:id', administrador.eliminarAdministrador);


module.exports = router;