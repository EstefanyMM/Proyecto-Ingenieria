const express = require('express');
const evento = require('../controllers/evento.controller');

const router = express.Router();

router.get('/', evento.obtenerEventos);

router.get('/:id', evento.obtenerEvento);

router.post('/', evento.agregarEvento);

router.put('/:id', evento.editarEvento);

router.delete('/:id', evento.eliminarEvento);

module.exports = router;