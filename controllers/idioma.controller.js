const { request, response } = require("express");
const Idiomas = require('../models').Idioma;

const obtenerIdiomas = async (req = request, res = response) => {
    
    let idiomas = await Idiomas.findAll();

    res.send(idiomas);
}

const obtenerIdioma = async (req = request, res = response) => {
    
    let idioma = await Idiomas.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(idioma);
}

const editarIdioma = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarIdioma = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}

const agregarIdioma = async (req = request, res = response) => {

    let newIdioma = await Idiomas.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        totalEstudiante: req.body.totalEstudiante	
    });

    res.send(newIdioma);
}


module.exports = {
    obtenerIdiomas,
    editarIdioma,
    agregarIdioma,
    eliminarIdioma,
    obtenerIdioma
}