const { request, response } = require("express");
const Correos = require('../models').Correo;

const obtenerCorreos = async (req = request, res = response) => {
    
    let correos = await Correos.findAll();

    res.send(correos);
}

const obtenerCorreo = async (req = request, res = response) => {
    
    let correo = await Correos.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(correo);
}

const editarCorreo = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarCorreo = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}

const agregarCorreo = async (req = request, res = response) => {

    let newCorreo = await Correos.create({
        email: req.body.email,	
    });

    res.send(newCorreo);
}


module.exports = {
    obtenerCorreos,
    editarCorreo,
    agregarCorreo,
    eliminarCorreo,
    obtenerCorreo
}