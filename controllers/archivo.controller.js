const { request, response } = require("express");
const Archivos = require('../models').Archivo;

const obtenerArchivos = async (req = request, res = response) => {
    
    let archivos = await Archivos.findAll();

    res.send(archivos);
}

const obtenerArchivo = async (req = request, res = response) => {
    
    let archivo = await Archivos.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(archivo);
}

const editarArchivo = async (req = request, res = response) => {
    let archivos = await Archivos.findByPk(req.params.id)

        if (archivos) {

            await archivos.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                url: req.body.url
            });
        }
    res.send(archivos);
}

const eliminarArchivo = async (req = request, res = response) => {
    //let archivo = 
    await Archivos.destroy({
        where: {
            id: req.params.id
        }
    });
    //res.status(archivo).send({ mensaje: 'Peticion delete' })
    res.send({ok: true});
}

const agregarArchivo = async (req = request, res = response) => {

    let newArchivo = await Archivos.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        url: req.body.url
    });

    res.send(newArchivo);
}


module.exports = {
    obtenerArchivos,
    editarArchivo,
    agregarArchivo,
    eliminarArchivo,
    obtenerArchivo
}