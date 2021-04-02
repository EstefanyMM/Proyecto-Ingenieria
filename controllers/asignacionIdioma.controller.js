const { request, response } = require("express");
const AsignacionIdiomas = require('../models').AsignacionIdioma;

const obtenerAsignacionIdiomas = async (req = request, res = response) => {
    
    let asignacionIdiomas = await AsignacionIdiomas.findAll();

    res.send(asignacionIdiomas);
}

const obtenerAsignacionIdioma = async (req = request, res = response) => {
    
    let asignacionIdioma = await AsignacionIdiomas.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(asignacionIdioma);
}

const editarAsignacionIdioma = async (req = request, res = response) => {
    let asignacionIdiomas = await AsignacionIdiomas.findByPk(req.params.id)

        if (asignacionIdiomas) {

            await asignacionIdiomas.update({
                hora: req.body.hora,
                AsignacionId: req.body.AsignacionId,
                IdiomaId: req.body.IdiomaId
            });
        }
    res.send(asignacionIdiomas);
}

const eliminarAsignacionIdioma = async (req = request, res = response) => {
    //let asignacionIdioma = 
    await AsignacionIdiomas.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ok: true});
}

const agregarAsignacionIdioma = async (req = request, res = response) => {

    let newAsignacionIdioma = await AsignacionIdiomas.create({
        hora: req.body.hora,
        AsignacionId: req.body.AsignacionId,
        IdiomaId: req.body.IdiomaId
    });

    res.send(newAsignacionIdioma);
}


module.exports = {
    obtenerAsignacionIdiomas,
    editarAsignacionIdioma,
    agregarAsignacionIdioma,
    eliminarAsignacionIdioma,
    obtenerAsignacionIdioma
}