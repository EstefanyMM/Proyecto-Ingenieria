const { request, response } = require("express");
const SeccionIdiomas = require('../models').SeccionIdioma;

const obtenerSeccionIdiomas = async (req = request, res = response) => {
    
    let seccionIdiomas = await SeccionIdiomas.findAll();

    res.send(seccionIdiomas);
}

const obtenerSeccionIdioma = async (req = request, res = response) => {
    
    let seccionIdioma = await SeccionIdiomas.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(seccionIdioma);
}

const editarSeccionIdioma = async (req = request, res = response) => {
    let seccionIdiomas = await SeccionIdiomas.findByPk(req.params.id)

        if (seccionIdiomas) {

            await seccionIdiomas.update({
                descripcion: req.body.descripcion,
                SeccionId: req.body.SeccionId,
                IdiomaId: req.body.IdiomaId
            });
        }
    res.send(seccionIdiomas);
}

const eliminarSeccionIdioma = async (req = request, res = response) => {
    //let maestroIdioma = 
    await SeccionIdiomas.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ok: true});
}

const agregarSeccionIdioma = async (req = request, res = response) => {

    let newSeccionIdioma = await SeccionIdiomas.create({
        descripcion: req.body.descripcion,
        SeccionId: req.body.SeccionId,
        IdiomaId: req.body.IdiomaId
    });

    res.send(newSeccionIdioma);
}


module.exports = {
    obtenerSeccionIdiomas,
    editarSeccionIdioma,
    agregarSeccionIdioma,
    eliminarSeccionIdioma,
    obtenerSeccionIdioma
}