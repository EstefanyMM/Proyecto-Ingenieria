const express = require('express');
const idioma = require('../controllers/idioma.controller');
const router = express.Router();


router.get('/', idioma.obtenerIdiomas);

router.get('/:id', idioma.obtenerIdioma);

router.post('/', idioma.agregarIdioma);

router.put('/', idioma.editarIdioma);

router.delete('/', idioma.eliminarIdioma);



module.exports = router;