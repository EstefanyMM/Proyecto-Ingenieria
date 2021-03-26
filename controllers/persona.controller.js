const { request, response } = require("express");
const Personas = require('../models').Persona;
const Estudiantes = require('../models').Estudiante;
const Idiomas = require('../models').Idioma;
//const Asignacions = require('../models').Asignacion;
//const Usuarios = require('../models').Usuario;
const Correos = require('../models').Correo;

const getPersonas = async (req = request, res = response) =>{
    let personas = await Personas.findAll();
    res.send(personas);
}

/*const getPersonas = async (req = request, res = response) => {

    let usuarios = await Personas.findAll({
        include:[
            {
                model: Correos
            }
        ]
    });

    res.send(usuarios);
}*/


const getPersona = async (req = request, res = response) =>{
    let persona = await Personas.findOne({
        where : {
            id: req.params.id
        }
    });
    res.send(persona);
}

const editarPersona = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const agregarPersona = async (req = request, res = response) => {
    
    let newPersona = await Personas.create({

        nombreCompleto: req.body.nombreCompleto,
        numeroIdentidad: req.body.numeroIdentidad,
        direccion: req.body.direccion,
        edad: req.body.edad,
        numeroTelefono: req.body.numeroTelefono,
    })
    res.send(newPersona);

}

const eliminarPersona = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}

const getIdiomasPorEstudiante = async (req = request, res = response) => {

    let data = await Asignacions.findAll({
        where: {
            estudianteid: req.params.id
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


module.exports ={
    getPersonas,
    getPersona,
    editarPersona,
    agregarPersona,
    eliminarPersona,
    getIdiomasPorEstudiante
}



