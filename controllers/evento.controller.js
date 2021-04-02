const { request, response } = require("express");
const Eventos = require('../models').Evento;

const obtenerEventos = async (req = request, res = response) => {
    
    let eventos = await Eventos.findAll();

    res.send(eventos);
}

const obtenerEvento = async (req = request, res = response) => {
    
    let evento = await Eventos.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(evento);
}

const editarEvento = async (req = request, res = response) => {
    let eventos = await Eventos.findByPk(req.params.id)

        if (eventos) {

            await eventos.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                fechaEvento: req.body.fechaEvento
            });
        }
    res.send(eventos);
}

const eliminarEvento = async (req = request, res = response) => {

    //let evento = 
    await Eventos.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ok: true});

}

const agregarEvento = async (req = request, res = response) => {

    let newEvento = await Eventos.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fechaEvento: req.body.fechaEvento
    });

    res.send(newEvento);
}


module.exports = {
    obtenerEventos,
    editarEvento,
    agregarEvento,
    eliminarEvento,
    obtenerEvento
}