const { request, response } = require("express");
const Matricula = require('../models').Matricula;

const getMatriculas = async (req = request, res = response) => {
    
    let matriculas = await Matricula.findAll();

    res.send(matriculas);
}

const getMatricula = async (req = request, res = response) => {
    
    let natricula = await Matricula.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(matricula);
}

const editarMatricula = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarMatricula = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}

const agregarMatricula = async (req = request, res = response) => {

    let newMatricula = await Matricula.create({
        estadoCuenta: req.body.estadoCuenta,	
        EstudianteId: req.body.EstudianteId,	
        SeccionId: req.body.SeccionId,
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