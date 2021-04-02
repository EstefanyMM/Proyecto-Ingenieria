const { request, response } = require("express");
const Facturas = require('../models').Factura;

const obtenerFacturas = async (req = request, res = response) => {
    
    let facturas = await Facturas.findAll();

    res.send(facturas);
}

const obtenerFactura = async (req = request, res = response) => {
    
    let factura = await Facturas.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(factura);
}

const editarFactura = async (req = request, res = response) => {
    let facturas = await Facturas.findByPk(req.params.id)

        if (facturas) {

            await facturas.update({
                fechaIngreso: req.body.fechaIngreso,
                montoFinal: req.body.montoFinal
            });
        }
    res.send(facturas);
}

const eliminarFactura = async (req = request, res = response) => {
    //let factura = 
    await Facturas.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ok: true});
}

const agregarFactura = async (req = request, res = response) => {

    let newFactura = await Facturas.create({
        fechaIngreso: req.body.fechaIngreso,
        montoFinal: req.body.montoFinal	
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