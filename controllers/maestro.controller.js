const { request, response } = require("express");
const Personas = require('../models').Persona;
const Maestros = require('../models').Maestro;
const Correos = require('../models').Correo;
const Idiomas = require('../models').Idioma;
const MaestroIdiomas = require('../models').MaestroIdioma;

const agregarMaestro = async (req = request, res = response) => {

    let newPersona = await Personas.create({
        nombreCompleto: req.body.nombreCompleto,
        numeroIdentidad: req.body.numeroIdentidad,
        direccion: req.body.direccion,
        edad: req.body.edad,
        numeroTelefono: req.body.numeroTelefono
    });

    let newCorreo = await Correos.create({
        email: req.body.email,
        PersonaId: newPersona.id
    });

    let newMaestro = await Maestros.create({
        descripcion: req.body.descripcion,
        password: req.body.password,
        codigoSeguridad: req.body.codigoSeguridad,
        nombreUsuario: req.body.nombreUsuario,
        PersonaId: newPersona.id
    });

    res.send(newMaestro);
}

const obtenerMaestros = async (req = request, res = response) => {

    let maestros = await Maestros.findAll({
        include: [
            {
                model: Personas,
                include: [{ model: Correos }]

            }

        ]
    });

    res.send(maestros);
}

const obtenerMaestro = async (req = request, res = response) => {

    let maestros = await Maestros.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Personas,
            include: [{ model: Correos }]
        }]
    });

    res.send(maestros);
}

const editarMaestro = async (req = request, res = response) => {
    let maestros = await Maestros.findByPk(req.params.id)

    if (maestros) {

        await maestros.update({
            descripcion: req.body.descripcion,
            password: req.body.password,
            codigoSeguridad: req.body.codigoSeguridad,
            nombreUsuario: req.body.nombreUsuario
            //PersonaId: newPersona.id
        });
    }
    res.send(maestros);
}

const eliminarMaestro = async (req = request, res = response) => {
    //let maestro = 
    await Maestros.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ ok: true });
}

const getIdiomasPorMaestro = async (req = request, res = response) => {

    let maestro = await MaestroIdiomas.findAll({
        where: {
            MaestroId: req.params.id
        },
        include: [
            {
                model: Idiomas
            }
        ]
    }); res.send(maestro)

}

const loginn = async (req = request, res = response) => {

    let maestro = await Maestros.findOne({
        where: {
            nombreUsuario: req.body.nombreUsuario,
            password: req.body.password
        }
    });
    if (maestro.id) {
        res.send({ Id: maestro.id, auth: true });
    }
    else {
        res.send({ auth: false });
    }
}

module.exports = {
    agregarMaestro,
    obtenerMaestros,
    obtenerMaestro,
    editarMaestro,
    eliminarMaestro,
    getIdiomasPorMaestro,
    loginn
}