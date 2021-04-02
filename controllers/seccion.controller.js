const { request, response } = require("express");
const Secciones = require('../models').Seccion;
const Idiomas = require('../models').Idioma;
const SeccionIdiomas = require('../models').SeccionIdioma;

const obtenerSecciones = async (req = request, res = response) => {
    
    let secciones = await Secciones.findAll();

    res.send(secciones);
}

const obtenerSeccion = async (req = request, res = response) => {
    
    let seccion = await Secciones.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(seccion);
}

const editarSeccion = async (req = request, res = response) => {

    let secciones = await Secciones.findByPk(req.params.id)

        if (secciones) {
            await secciones.update({
                horaInicio: req.body.horaInicio,	
                horaFin: req.body.horaFin,	
                cuposMaximos: req.body.cuposMaximos,
                dias: req.body.dias	
            });
        }
    res.send(secciones);
}

const eliminarSeccion = async (req = request, res = response) => {
    //let seccion = 
    await Secciones.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ok: true});
}

const agregarSeccion = async (req = request, res = response) => {

    let newSeccion = await Secciones.create({
        horaInicio: req.body.horaInicio,	
        horaFin: req.body.horaFin,	
        cuposMaximos: req.body.cuposMaximos,
        dias: req.body.dias
    });

    res.send(newSeccion);
}

const getSeccionIdioma = async (req = request, res = response) => {

    let data = await SeccionIdiomas.findAll({
        where: {
            IdiomaId: req.params.id
        },
        include: [
            {
                model: Idiomas
            }, {
               model: Secciones
            }
        ]

    });

    res.send(data);
}

module.exports = {
    obtenerSeccion,
    editarSeccion,
    agregarSeccion,
    eliminarSeccion,
    obtenerSecciones,
    getSeccionIdioma
}