const { request, response } = require("express");
const Seccion = require('../models').Seccion;

const obtenerSecciones = async (req = request, res = response) => {
    
    let seccion = await Seccion.findAll();

    res.send(seccion);
}

const obtenerSeccion = async (req = request, res = response) => {
    
    let seccion = await Seccion.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(seccion);
}

const editarSeccion= (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarSeccion = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}

const agregarSeccion = async (req = request, res = response) => {

    let newSeccion = await Seccion.create({
        horaInicio: req.body.horaInicio,	
        horaFin: req.body.horaFin,	
        cuposMaximos: req.body.cuposMaximos,
        dias: req.body.dias,
        idioamaId: newIdioma.id
    });

    res.send(newSeccion);
}


module.exports = {
    obtenerSeccion,
    editarSeccion,
    agregarSeccion,
    eliminarSeccion,
    obtenerSecciones
}