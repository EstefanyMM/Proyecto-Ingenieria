const { request, response } = require("express");
const Matricula = require('../models').Matricula;
const Estudiantes = require('../models').Estudiante;
const Factura = require('../models').Factura;
const Maestros = require('../models').Maestro;
const Seccion = require('../models').Seccion;

const agregarMatricula = async (req = request, res = response) => {

    let newMatricula = await Matricula.create({
        estadoCuenta: req.body.estadoCuenta,	
        EstudianteId: newEstudiante.id,
        FacturaId: newFactura.id,	
        MaestroId: newMaestro.id,
        SeccionId: newSeccion.id
    });

    res.send(newMatricula);
}


const getMatriculas = async (req = request, res = response) => {
    
    let matriculas = await Matricula.findAll({
      include:[
          {
              model: Estudiantes
          },
          {
              model: Factura
          },
          {
              model: Maestros
          },
          {
              model: Seccion
          }
      ]
    });
     
    res.send(matriculas);
}

const getMatricula = async (req = request, res = response) => {
    
    let natricula = await Matricula.findOne({
        where : {
            id: req.params.id
        },
        include:[
            {
                model: Estudiantes
            },
            {
                model: Factura
            },
            {
                model: Maestros
            },
            {
                model: Seccion
            }
        ]
    });

    res.send(matricula);
}

const editarMatricula = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarMatricula = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}


module.exports = {
    getMatriculas,
    editarMatricula,
    agregarMatricula,
    eliminarMatricula,
    getMatricula
}