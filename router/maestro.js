const express = require('express');
const maestro = require('../controllers/maestro.controller');
const router = express.Router();


router.get('/', maestro.obtenerMaestros);

router.get('/:id', maestro.obtenerMaestro);

router.post('/', maestro.agregarMaestro);

router.put('/:id', maestro.editarMaestro);

router.delete('/:id', maestro.eliminarMaestro);

router.get('/idioma/:id', maestro.getIdiomasPorMaestro);

router.post('/loginn', maestro.loginn);

module.exports = router;