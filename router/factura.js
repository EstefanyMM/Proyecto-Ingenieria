const express = require('express');
const factura = require('../controllers/factura.controller');

const router = express.Router();

router.get('/', factura.obtenerFacturas);

router.get('/:id', factura.obtenerFactura);

router.post('/', factura.agregarFactura);

router.put('/:id', factura.editarFactura);

router.delete('/:id', factura.eliminarFactura);

module.exports = router;