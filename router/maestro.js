const express = require('express');
const maestro = require('../controllers/maestro.controller');
const router = express.Router();


router.get('/', maestro.obtenerMaestros);

router.get('/:id', maestro.obtenerMaestro);

router.post('/', maestro.agregarMaestro);

router.put('/', maestro.editarMaestro);

router.delete('/', maestro.eliminarMaestro);

 router.get('/idioma/:id',maestro.getIdiomasPorMaestro);


module.exports = router;