const express = require('express');
const administrador = require('../controllers/administrador.controller');
const router = express.Router();


router.get('/', administrador.obtenerAdministradores);

router.get('/:id', administrador.obtenerAdministrador);

router.post('/', administrador.agregarAdministrador);

router.put('/', administrador.editarAdministrador);

router.delete('/', administrador.eliminarAdministrador);

 //router.get('/idioma/:id', estudiante.getIdiomasPorEstudiante);


module.exports = router;