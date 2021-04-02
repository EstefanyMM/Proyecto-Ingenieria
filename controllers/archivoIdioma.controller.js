const { request, response } = require("express");
const ArchivoIdiomas = require('../models').ArchivoIdioma;

const obtenerArchivoIdiomas = async (req = request, res = response) => {
    
    let archivoIdiomas = await ArchivoIdiomas.findAll();

    res.send(archivoIdiomas);
}

const obtenerArchivoIdioma = async (req = request, res = response) => {
    
    let archivoIdioma = await ArchivoIdiomas.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(archivoIdioma);
}

const editarArchivoIdioma = async (req = request, res = response) => {
    let archivoIdiomas = await ArchivoIdiomas.findByPk(req.params.id)

        if (archivoIdiomas) {

            await archivoIdiomas.update({
                fecha: req.body.fecha,
                ArchivoId: req.body.ArchivoId,
                IdiomaId: re.body.IdiomaId
            });
        }
    res.send(archivoIdiomas);
}

const eliminarArchivoIdioma = async (req = request, res = response) => {
    //let archivoIdioma = 
    await ArchivoIdiomas.destroy({
        where: {
            id: req.params.id
        }
    });
    //res.status(archivoIdioma).send({ mensaje: 'Peticion delete' })
    res.send({ok: true});
}

const agregarArchivoIdioma = async (req = request, res = response) => {

    let newArchivoIdioma = await ArchivoIdiomas.create({
        fecha: req.body.fecha,
        ArchivoId: req.body.ArchivoId,
        IdiomaId: req.body.IdiomaId
    });

    res.send(newArchivoIdioma);
}


module.exports = {
    obtenerArchivoIdiomas,
    editarArchivoIdioma,
    agregarArchivoIdioma,
    eliminarArchivoIdioma,
    obtenerArchivoIdioma
}