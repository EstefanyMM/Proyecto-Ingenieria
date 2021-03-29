const { request, response } = require("express");
const Personas = require('../models').Persona;
const Maestros = require('../models').Maestro;
const Correos = require('../models').Correo;


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
        nombreUsuario: req.body.nombreUsuario,
        descripcion: req.body.descripcion,
        password: req.body.password,
        codigoSeguridad: req.body.codigoSeguridad,
        PersonaId: newPersona.id
    });

    res.send(newMaestro);
}

const obtenerMaestros = async (req = request, res = response) => {

    let maestros = await Maestros.findAll({
        include: [
            {
                model: Personas,
                include:[{ model: Correos}]

            }
            
        ]
    });

    res.send(maestros);
}

const obtenerMaestro = async (req = request, res = response) => {

    let maestros = await Maestros.findAll({
        where: {
            id: req.params.id
        },
        include: [{
            model: Personas,
            include:[{ model: Correos}]
        }]
    });

    res.send(maestros);
}

const editarMaestro = async (req = request, res = response) => {
    let maestros = await Maestros.findByPk(req.params.id)

        if (maestros) {

            await maestros.update({
                nombreUsuario: req.body.nombreUsuario,
                descripcion: req.body.descripcion,
                password: req.body.password,
                codigoSeguridad: req.body.codigoSeguridad,
                //PersonaId: newPersona.id
            });
        }
    res.send(maestros);
}

const eliminarMaestro = async (req = request, res = response) => {
    let maestro = await Maestros.destroy({
        where: {
            id: req.params.id
        }
    });
     res.status(maestro).send({ mensaje: 'Peticion delete' })
}

const getIdiomasPorMaestro = async (req = request, res = response) => {

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
    agregarMaestro,
    obtenerMaestros,
    obtenerMaestro,
    editarMaestro,
    eliminarMaestro,
    getIdiomasPorMaestro

}