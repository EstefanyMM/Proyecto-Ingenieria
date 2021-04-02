const { request, response } = require("express");
const Personas = require('../models').Persona;

const getPersonas = async (req = request, res = response) => {

    let personas = await Personas.findAll();

    res.send(personas);
}

const getPersona = async (req = request, res = response) => {

    let persona = await Personas.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(persona);
}

const editarPersona = async (req = request, res = response) => {
    let personas = await Personas.findByPk(req.params.id)

        if (personas) {

            await personas.update({
                nombreCompleto: req.body.nombreCompleto,
                numeroIdentidad: req.body.numeroIdentidad,
                direccion: req.body.direccion,
                edad: req.body.edad,
                numeroTelefono: req.body.numeroTelefono
            });
        }
    res.send(personas);
}

const eliminarPersona = async (req = request, res = response) => {
    //let persona = 
    await Personas.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ok: true});
}

const agregarPersona = async (req = request, res = response) => {

    let newPersona = await Personas.create({
        nombreCompleto: req.body.nombreCompleto,
        numeroIdentidad: req.body.numeroIdentidad,
        direccion: req.body.direccion,
        edad: req.body.edad,
        numeroTelefono: req.body.numeroTelefono
    });

    res.send(newPersona);
}

module.exports = {
    getPersonas,
    editarPersona,
    eliminarPersona,
    agregarPersona,
    getPersona
}