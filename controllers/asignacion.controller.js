const { request, response } = require("express");
const Asignaciones = require('../models').Asignacion;

const obtenerAsignaciones = async (req = request, res = response) => {
    
    let asignaciones = await Asignaciones.findAll();

    res.send(asignaciones);
}

const obtenerAsignacion = async (req = request, res = response) => {
    
    let asignacion = await Asignaciones.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(asignacion);
}

const editarAsignacion = async (req = request, res = response) => {
    let asignaciones = await Asignaciones.findByPk(req.params.id)

        if (asignaciones) {

            await asignaciones.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                fecha: req.body.fecha,
                valor: req.body.valor
            });
        }
    res.send(asignaciones);
}

const eliminarAsignacion = async (req = request, res = response) => {
    //let asignacion = 
    await Asignaciones.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ok: true});
}

const agregarAsignacion = async (req = request, res = response) => {

    let newAsignacion = await Asignaciones.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        valor: req.body.valor
    });

    res.send(newAsignacion);
}


module.exports = {
    obtenerAsignaciones,
    editarAsignacion,
    agregarAsignacion,
    eliminarAsignacion,
    obtenerAsignacion
}