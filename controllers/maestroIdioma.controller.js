const { request, response } = require("express");
const Maestros = require('../models').Maestro;
const Idiomas = require('../models').Idioma;
const MaestroIdiomas = require('../models').MaestroIdioma;

const obtenerMaestroIdiomas = async (req = request, res = response) => {
    
    let maestroIdiomas = await MaestroIdiomas.findAll({
        include: [
            {
                model: Maestros
            },{
                model: Idiomas

            }     
        ]
    });

    res.send(maestroIdiomas);
}

const obtenerMaestroIdioma = async (req = request, res = response) => {
    
    let maestroIdioma = await MaestroIdiomas.findOne({
        where : {
            id: req.params.id
        },
        include: [
            {
                model: Maestros
            },{
                model: Idiomas

            }     
        ]
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