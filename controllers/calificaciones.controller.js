const { request, response } = require("express");
const Calificaciones = require('../models').Calificacion;

const getCalificaciones = async (req = request, res = response) => {
    
    let calificaciones = await Calificaciones.findAll();

    res.send(calificaciones);
}

const getCalificacion = async (req = request, res = response) => {
    
    let calificacion = await Calificaciones.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(calificacion);
}

const editarCalificaciones = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarCalificaciones = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}

const agregarCalificaciones = async (req = request, res = response) => {

    let newCalificaciones = await Calificaciones.create({
        nota: req.body.nota,	
        estado: req.body.estado,	
    });

    res.send(newCalificaciones);
}


module.exports = {
    getCalificacion,
    editarCalificaciones,
    agregarCalificaciones,
    eliminarCalificaciones,
    getCalificaciones
}