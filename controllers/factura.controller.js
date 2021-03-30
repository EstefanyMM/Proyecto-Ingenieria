const { request, response } = require("express");
const Factura = require('../models').Factura;

const obtenerFacturas = async (req = request, res = response) => {
    
    let factura = await Factura.findAll();

    res.send(factura);
}

const obtenerFactura = async (req = request, res = response) => {
    
    let factura = await Factura.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(factura);
}

const editarFactura = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarFactura = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}

const agregarFactura = async (req = request, res = response) => {

    let newFactura = await Factura.create({
        fechaIngreso: req.body.fechaIngreso,	
        montoFinal: req.body.montoFinal,	
    });

    res.send(newFactura);
}


module.exports = {
    obtenerFacturas,
    editarFactura,
    agregarFactura,
    eliminarFactura,
    obtenerFactura
}