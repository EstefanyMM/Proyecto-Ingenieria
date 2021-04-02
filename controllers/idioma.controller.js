const { request, response } = require("express");
const Idiomas = require('../models').Idioma;
const Asignaciones = require('../models').Asignacion;
const AsignacionIdiomas = require('../models').AsignacionIdioma;
const ArchivoIdiomas = require('../models').ArchivoIdioma;
const Archivos = require('../models').Archivo;

const obtenerIdiomas = async (req = request, res = response) => {
    
    let idiomas = await Idiomas.findAll({
        include: [
            {
                model: Asignaciones
            }
        ]
    });

    res.send(idiomas);
}

const obtenerIdioma = async (req = request, res = response) => {
    
    let idioma = await Idiomas.findOne({
        where : {
            id: req.params.id
        },
        include: [
            {
                model: Asignaciones
            }
        ]
    });

    res.send(idioma);
}

const editarIdioma = async (req = request, res = response) => {
    let idiomas = await Idiomas.findByPk(req.params.id)

        if (idiomas) {

            await idiomas.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                totalEstudiante: req.body.totalEstudiante	
            });
        }
    res.send(idiomas);
}

const eliminarIdioma = async (req = request, res = response) => {
    //let idioma = 
    await Idiomas.destroy({
        where: {
            id: req.params.id
        }
    });
    //res.status(idioma).send({ mensaje: 'Peticion delete' })
    res.send({ok: true});
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

const getAsignacionesporIdioma = async (req = request, res = response) => {

    let data = await AsignacionIdiomas.findAll({
        where: {
            AsignacionId: req.params.id
        },
        include: [
            {
                model: Idiomas
            }, {
               model: Asignaciones
            }
        ]

    });

    res.send(data);
}

const getArchivoporIdioma = async (req = request, res = response) => {

    let data = await ArchivoIdiomas.findAll({
        where: {
            ArchivoId: req.params.id
        },
        include: [
            {
                model: Idiomas
            }, {
               model: Archivos
            }
        ]

    });

    res.send(data);
}

module.exports = {
    obtenerIdiomas,
    editarIdioma,
    agregarIdioma,
    eliminarIdioma,
    obtenerIdioma,
    getAsignacionesporIdioma,
    getArchivoporIdioma
}