
const { request, response } = require("express");
const Seccions = require('../models').Seccion;
const Idiomas = require('../models').Idioma;

const agregarSeccion = async (req = request, res = response) => {

    let newIdioma = await Idioma.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        totalEstudiante: req.body.totalEstudiante	
    });

    let newSeccion = await Seccions.create({
        horaInicio: req.body.horaInicio,	
        horaFin: req.body.horaFin,	
        cuposMaximos: req.body.cuposMaximos,
        dias: req.body.dias,
        IdiomaId: newIdioma.id
    });

    res.send(newSeccion);
}

const obtenerSecciones = async (req = request, res = response) => {
    
    let seccion = await Seccions.findAll({
       
    });

    res.send(seccion);
}

const obtenerSeccion = async (req = request, res = response) => {
    
    let seccion = await Seccions.findOne({
        where : {
            id: req.params.id
        },
        include: [
            {
                model: Idiomas,
    
            }
            
        ]

    });

    res.send(seccion);
}

const editarSeccion= (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarSeccion = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}




module.exports = {
    obtenerSeccion,
    editarSeccion,
    agregarSeccion,
    eliminarSeccion,
    obtenerSecciones


}