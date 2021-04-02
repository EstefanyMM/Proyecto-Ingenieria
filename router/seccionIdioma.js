const express = require('express');
const seccionIdioma = require('../controllers/seccionIdioma.controller');
const router = express.Router();


router.get('/', seccionIdioma.obtenerSeccionIdiomas);

router.get('/:id', seccionIdioma.eliminarSeccionIdioma);

router.post('/', seccionIdioma.agregarSeccionIdioma);

router.put('/:id', seccionIdioma.editarSeccionIdioma);

router.delete('/:id', seccionIdioma.eliminarSeccionIdioma);

module.exports = router;