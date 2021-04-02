const { request, response } = require("express");
const MaestroIdiomas = require('../models').MaestroIdioma;

const obtenerMaestroIdiomas = async (req = request, res = response) => {
    
    let maestroIdiomas = await MaestroIdiomas.findAll();

    res.send(maestroIdiomas);
}

const obtenerMaestroIdioma = async (req = request, res = response) => {
    
    let maestroIdioma = await MaestroIdiomas.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(maestroIdioma);
}

const editarMaestroIdioma = async (req = request, res = response) => {
    let maestroIdiomas = await MaestroIdiomas.findByPk(req.params.id)

        if (maestroIdiomas) {

            await maestroIdiomas.update({
                descripcion: req.body.descripcion,
                MaestroId: req.body.MaestroId,
                IdiomaId: req.body.IdiomaId
            });
        }
    res.send(maestroIdiomas);
}

const eliminarMaestroIdioma = async (req = request, res = response) => {
    //let maestroIdioma = 
    await MaestroIdiomas.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ok: true});
}

const agregarMaestroIdioma = async (req = request, res = response) => {

    let newMaestroIdioma = await MaestroIdiomas.create({
        descripcion: req.body.descripcion,
        MaestroId: req.body.MaestroId,
        IdiomaId: req.body.IdiomaId
    });

    res.send(newMaestroIdioma);
}


module.exports = {
    obtenerMaestroIdiomas,
    editarMaestroIdioma,
    agregarMaestroIdioma,
    eliminarMaestroIdioma,
    obtenerMaestroIdioma
}