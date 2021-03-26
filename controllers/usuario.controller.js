const { request, response } = require("express");
const Usuarios = require('../models').Usuario;

const getUsuarios = async (req = request, res = response) => {
    
    let usuarios = await Usuarios.findAll();

    res.send(usuarios);
}

const getUsuario = async (req = request, res = response) => {
    
    let usuario = await Usuarios.findOne({
        where : {
            id: req.params.id
        }
    });

    res.send(usuario);
}

const editarUsuario = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion put' });
}

const eliminarUsuario = (req = request, res = response) => {
    res.send({ mensaje: 'Peticion delete' });
}

const agregarUsuario = async (req = request, res = response) => {

    let newUsuario = await Usuarios.create({
        nombre: req.body.nombre,	
        apellido: req.body.apellido,	
        correo: req.body.correo
    });

    res.send(newUsuario);
}


module.exports = {
    getUsuarios,
    editarUsuario,
    agregarUsuario,
    eliminarUsuario,
    getUsuario
}