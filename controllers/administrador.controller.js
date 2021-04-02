const { request, response } = require("express");
const Personas = require('../models').Persona;
const Administradors = require('../models').Administrador;
const Correos = require('../models').Correo;


const agregarAdministrador = async (req = request, res = response) => {

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

    let newAdministrador = await Administradors.create({
        descripcion: req.body.descripcion,
        password: req.body.password,
        nombreUsuario: req.body.nombreUsuario,
        PersonaId: newPersona.id
    });

    res.send(newAdministrador);
}

const obtenerAdministradors = async (req = request, res = response) => {

    let administradors = await Administradors.findAll({
        include: [
            {
                model: Personas,
                include:[{ model: Correos}]

            }
            
        ]
    });

    res.send(administradors);
}

const obtenerAdministrador = async (req = request, res = response) => {

    let administrador = await Administradors.findAll({
        where: {
            id: req.params.id
        },
        include: [{
            model: Personas,
            include:[{ model: Correos}]
        }]
    });

    res.send(administrador);
}

const editarAdministrador = async (req = request, res = response) => {
    let administradors = await Administradors.findByPk(req.params.id)

        if (administradors) {

            await administradors.update({
                descripcion: req.body.descripcion,
                password: req.body.password,
                nombreUsuario: req.body.nombreUsuario
                //PersonaId: newPersona.id
            });
        }
    res.send(administradors);
}

const eliminarAdministrador = async (req = request, res = response) => {
    let administrador = await Administradors.destroy({
        where: {
            id: req.params.id
        }
    });
     res.status(administrador).send({ mensaje: 'Peticion delete' })
}


module.exports = {
    agregarAdministrador,
    obtenerAdministradors,
    obtenerAdministrador,
    editarAdministrador,
    eliminarAdministrador

}