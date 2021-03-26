const express = require('express');
const correo = require('../controllers/correo.controller');
const router = express.Router();


router.get('/', correo.obtenerCorreos);

router.get('/:id', correo.obtenerCorreo);

router.post('/', correo.agregarCorreo);

router.put('/', correo.editarCorreo);

router.delete('/', correo.eliminarCorreo);



module.exports = router;