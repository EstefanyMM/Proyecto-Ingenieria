const { request, response } = require("express");
const Matriculas = require('../models').Matricula;
const Secciones = require('../models').Seccion;
const Facturas = require('../models').Factura;
const Estudiantes = require('../models').Estudiante;
const Maestros = require('../models').Maestro;
const Idiomas = require('../models').Idioma;
const SeccionIdiomas = require('../models').SeccionIdioma;

const getMatriculas = async (req = request, res = response) => {
    
    let matriculas = await Matriculas.findAll({
        include: [
            {
                model: SeccionIdiomas,
                include: [{model: Idiomas},{model: Secciones}]
            },
            {
                model: Facturas
            },
            {
                model: Estudiantes
            },
            {
                model: Maestros
            }
        ]
    });

    res.send(matriculas);
}

const getMatricula = async (req = request, res = response) => {
    
    let matricula = await Matriculas.findOne({
        where : {
            id: req.params.id
        },
        include: [
            {
                model: SeccionIdiomas,
                include: [{model: Idiomas}, {model: Secciones}]
            },
            {
                model: Facturas
            },
            {
                model: Estudiantes
            },
            {
                model: Maestros
            }
        ]
    });

    res.send(matricula);
}

const editarMatricula = async (req = request, res = response) => {
    let matriculas = await Matriculas.findByPk(req.params.id)

        if (matriculas) {

            await matriculas.update({
                estadoCuenta: req.body.estadoCuenta,	
                EstudianteId: req.body.EstudianteId,	
                SeccionIdiomaId: req.body.SeccionIdiomaId,
                FacturaId: req.body.FacturaId,
                MaestroId: req.body.MaestroId
            });
        }
    res.send(matriculas);
}

const eliminarMatricula = async (req = request, res = response) => {
    //let matricula = 
    await Matriculas.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ok: true});
}

const agregarMatricula = async (req = request, res = response) => {

    let newMatricula = await Matriculas.create({
        estadoCuenta: req.body.estadoCuenta,	
        EstudianteId: req.body.EstudianteId,	
        SeccionIdiomaId: req.body.SeccionIdiomaId,
        FacturaId: req.body.FacturaId,
        MaestroId: req.body.MaestroId
    });

    res.send(newMatricula);
}


module.exports = {
    getMatriculas,
    editarMatricula,
    agregarMatricula,
    eliminarMatricula,
    getMatricula
}