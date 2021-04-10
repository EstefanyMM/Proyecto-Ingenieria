const { request, response } = require("express");
const EstudianteIdiomas = require('../models').EstudianteIdioma;
const Estudiantes = require('../models').Estudiante;
const Personas = require('../models').Persona;
const Correos = require('../models').Correo;



const obtenerEstudianteIdiomas = async (req = request, res = response) => {

    let estudianteIdiomas = await EstudianteIdiomas.findAll();

    res.send(estudianteIdiomas);
}

const obtenerEstudianteIdioma = async (req = request, res = response) => {

    let estudianteIdioma = await EstudianteIdiomas.findAll({
        where: {
            IdiomaId: req.params.id
        },
        include: [{
            model: Estudiantes,
            include: [
                {
                    model: Personas,
                    include: [{
                        model: Correos

                    }]
                    
                }
            ]
        }]

    });

    res.send(estudianteIdioma);
}

const editarEstudianteIdioma = async (req = request, res = response) => {
    let estudianteIdiomas = await EstudianteIdiomas.findByPk(req.params.id)

    if (estudianteIdiomas) {

        await estudianteIdiomas.update({
            descripcion: req.body.descripcion,
            EstudinteId: req.body.EstudianteId,
            IdiomaId: req.body.IdiomaId
        });
    }
    res.send(estudianteIdiomas);
}

const eliminarEstudianteIdioma = async (req = request, res = response) => {
    //let estudianteIdioma = 
    await EstudianteIdiomas.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ ok: true });
}

const agregarEstudianteIdioma = async (req = request, res = response) => {

    let newEstudianteIdioma = await EstudianteIdiomas.create({
        descripcion: req.body.descripcion,
        EstudianteId: req.body.EstudianteId,
        IdiomaId: req.body.IdiomaId
    });

    res.send(newEstudianteIdioma);
}


module.exports = {
    obtenerEstudianteIdiomas,
    editarEstudianteIdioma,
    agregarEstudianteIdioma,
    eliminarEstudianteIdioma,
    obtenerEstudianteIdioma
}