const express = require('express');
const estudianteIdioma = require('../controllers/estudianteIdioma.controller');
const router = express.Router();


router.get('/', estudianteIdioma.obtenerEstudianteIdiomas);

router.get('/:id', estudianteIdioma.obtenerEstudianteIdioma);

router.post('/', estudianteIdioma.agregarEstudianteIdioma);

router.put('/:id', estudianteIdioma.editarEstudianteIdioma);

router.delete('/:id', estudianteIdioma.eliminarEstudianteIdioma);

module.exports = router;