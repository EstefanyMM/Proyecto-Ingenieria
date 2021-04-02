const { request, response } = require("express");
const Personas = require('../models').Persona;
const Estudiantes = require('../models').Estudiante;
const Correos = require('../models').Correo;
const Idiomas = require('../models').Idioma;
const EstudianteIdiomas = require('../models').EstudianteIdioma;

const getEstudiantes = async (req = request, res = response) => {

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

const getEstudiante = async (req = request, res = response) => {

    let estudiante = await Estudiantes.findOne({
        where : {
            id: req.params.id
        },
        include: [{
            model: Personas,
            include:[{ model: Correos}]
        }]
    });

    res.send(estudiante);
}

const editarEstudiante = async (req = request, res = response) => {
    let estudiantes = await Estudiantes.findByPk(req.params.id)

        if (estudiantes) {

            await estudiantes.update({
                fechaRegistro: req.body.fechaRegistro,
                password: req.body.password,
                codigoSeguridad: req.body.codigoSeguridad,
                nombreUsuario: req.body.nombreUsuario
                //PersonaId: newPersona.id
            });
        }
    res.send(estudiantes);
}

const eliminarEstudiante = async (req = request, res = response) => {
    //let estudiante = 
    await Estudiantes.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ok: true});
}

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

const getIdiomasPorEstudiante = async (req = request, res = response) => {

    let data = await EstudianteIdiomas.findAll({
        where: {
            EstudianteId: req.params.id
        },
        include: [
            {
                model: Idiomas
            }, {
               model: Estudiantes
            }
        ]

    });

    res.send(data);
}

module.exports = {
    getEstudiantes,
    editarEstudiante,
    eliminarEstudiante,
    agregarEstudiante,
    getEstudiante,
    getIdiomasPorEstudiante
}