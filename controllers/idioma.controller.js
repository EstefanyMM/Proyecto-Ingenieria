const { request, response } = require("express");
const Idiomas = require('../models').Idioma;
const Asignaciones = require('../models').Asignacion;
const AsignacionIdiomas = require('../models').AsignacionIdioma;
const ArchivoIdiomas = require('../models').ArchivoIdioma;
const Archivos = require('../models').Archivo;

const obtenerIdiomas = async (req = request, res = response) => {
    
    let idiomas = await Idiomas.findAll({
        
    });

    res.send(idiomas);
}

const getIdioma = async (req = request, res = response) => {
    
    let idioma = await Idiomas.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(idioma);
}

const editarIdioma = async (req = request, res = response) => {
    let idiomas = await Idiomas.findByPk(req.params.id)

        if (idiomas) {

            await idiomas.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                totalEstudiante: req.body.totalEstudiante	
            });
        }
    res.send(idiomas);
}

const eliminarIdioma = async (req = request, res = response) => {
    //let idioma = 
    await Idiomas.destroy({
        where: {
            id: req.params.id
        }
    });
    //res.status(idioma).send({ mensaje: 'Peticion delete' })
    res.send({ok: true});
}

const agregarIdioma = async (req = request, res = response) => {

    let newIdioma = await Idiomas.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        totalEstudiante: req.body.totalEstudiante	
    });

    res.send(newIdioma);
}

const getAsignacionesporIdioma = async (req = request, res = response) => {

    let data = await AsignacionIdiomas.findAll({
        where: {
            AsignacionId: req.params.id
        },
        include: [
            {
                model: Idiomas
            }, {
               model: Asignaciones
            }
        ]

    });

    res.send(data);
}

const getArchivoporIdioma = async (req = request, res = response) => {

    let data = await ArchivoIdiomas.findAll({
        where: {
            IdiomaId: req.params.id
        },
        include: [
         {
               model: Archivos
            }
        ]

    });

    res.send(data);
}

const agregarTarea = async (req = request, res = response) => {


    if (!req.files) {
        return res.status(400).json({ message: 'No ha seleccionado un archivo' });
    }

    let file = req.files.tarea
    let fileUrl = `tareas/${file.name}`;

    file.mv(fileUrl, async (err) => {
        if (err)
            return res.status(500).send(err);

        try {

            let archivo = await Archivos.create({
                nombre: file.name,
                descripcion: req.body.descripcion,
                url: fileUrl
            });

            if (archivo.id) {
                let archivosPorIdioma = ArchivoIdiomas.create({
                    ArchivoId: archivo.id,
                    IdiomaId: req.params.id 
                })
            }

            res.status(200).json({
                archivo,
                message: 'Archivo subido con exito!'
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message
            })
        }

    });

}


module.exports = {
    obtenerIdiomas,
    editarIdioma,
    agregarIdioma,
    eliminarIdioma,
    getIdioma,
    getAsignacionesporIdioma,
    getArchivoporIdioma,
    agregarTarea
}