const { request, response } = require("express");
const Personas = require('../models').Persona;
const Adminstrador = require('../models').Adminstrador;
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

    let newAdministrador = await Adminstradors.create({
        nombreUsuario: req.body.nombreUsuario,
        descripcion: req.body.descripcion,
        password: req.body.password,
        PersonaId: newPersona.id
    });

    res.send(newAdministrador);
}

const obtenerAdministradores = async (req = request, res = response) => {

    let administradores = await Adminitradors.findAll({
        include: [
            {
                model: Personas,
                include:[{ model: Correos}]

            }
            
        ]
    });

    res.send(administradores);
}

const obtenerAdministrador = async (req = request, res = response) => {

    let administrador = await Adminitradors.findAll({
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

const editarAdministrador = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarAdministrador = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}

/*const getIdiomasPorEstudiante = async (req = request, res = response) => {

    let data = await Asignacions.findAll({
        where: {
            estudianteid: req.params.id
        },
        // include: [
        //     {
        //         model: Idiomas
        //     }, {
        //         model: Estudiantes
        //     }
        // ]

    });

    res.send(data);
}*/


module.exports = {
    agregarAdministrador,
    obtenerAdministrador,
    obtenerAdministradores,
    editarAdministrador,
    eliminarAdministrador,
    //getIdiomasPorEstudiante

}