const { request, response } = require("express");
const Personas = require('../models').Persona;
const Estudiantes = require('../models').Estudiante;
const Correos = require('../models').Correo;


const agregarEstudiante = async (req = request, res = response) => {

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

    let newEstudiante = await Estudiantes.create({
        fechaRegistro: req.body.fechaRegistro,
        password: req.body.password,
        codigoSeguridad: req.body.codigoSeguridad,
        nombreUsuario: req.body.nombreUsuario,
        PersonaId: newPersona.id
    });

    res.send(newEstudiante);
}

const obtenerEstudiantes = async (req = request, res = response) => {

    let estudiantes = await Estudiantes.findAll({
        include: [
            {
                model: Personas,
                include:[{ model: Correos}]

            }
            
        ]
    });

    res.send(estudiantes);
}

const obtenerEstudiante = async (req = request, res = response) => {

    let estudiantes = await Estudiantes.findAll({
        where: {
            id: req.params.id
        },
        include: [{
            model: Personas,
            include:[{ model: Correos}]
        }]
    });

    res.send(estudiantes);
}

const editarEstudiante = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarEstudiante = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}

const getIdiomasPorEstudiante = async (req = request, res = response) => {

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
}


module.exports = {
    agregarEstudiante,
    obtenerEstudiantes,
    obtenerEstudiante,
    editarEstudiante,
    eliminarEstudiante,
    getIdiomasPorEstudiante

}