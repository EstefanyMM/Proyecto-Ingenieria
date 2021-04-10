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
                include: [{ model: Correos }]

            }

        ]
    });

    res.send(estudiantes);
}

const getEstudiante = async (req = request, res = response) => {

    let estudiante = await Estudiantes.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Personas,
            include: [{ model: Correos }]
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
    res.send({ ok: true });
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
    const nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'carolinaandrade974@gmail.com',
            pass: 'Holamundo2021'
        }
    });

    let mailOptions = {
        from: 'carolinaandrade974@gmail.com',
        to: req.body.email,
        subject: 'Academia Centroamericana de Honduras',
        text: 'Bienvenido, gracias por tu preferencia, te ofrecemos los mejores cursos de lenguas extranjeras con los maestros mas capacitados :)'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const getEstudiantePorIdiomas = async (req = request, res = response) => {

    let estudiante = await EstudianteIdiomas.findAll({
        where: {
            EstudianteId: req.params.id
        },
        include: [
            {
                model: Idiomas
            }
        ]

    });
    res.send(estudiante);
}


const login = async (req = request, res = response) => {

    let estudiante = await Estudiantes.findOne({
        where: {
            nombreUsuario: req.body.nombreUsuario,
            password: req.body.password
        }
    });
    if (estudiante.id) {
        res.send({ Id: estudiante.id, auth: true });
    }
    else {
        res.send({ auth: false });
    }
}

module.exports = {
    getEstudiantes,
    editarEstudiante,
    eliminarEstudiante,
    agregarEstudiante,
    getEstudiante,
    getEstudiantePorIdiomas,
    login
}