const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// Importar rutas
var rutaUsuario = require('./router/usuario');
var rutaPersona = require('./router/persona');
var rutaCalificacion = require('./router/calificaciones');
var rutaEstudiantes = require('./router/estudiante');
var rutaCorreo = require('./router/correo');


// uso de rutas
app.use('/usuario', rutaUsuario);
app.use('/persona', rutaPersona);
app.use('/calificaciones', rutaCalificacion);
app.use('/estudiante', rutaEstudiantes);
app.use('/correo', rutaCorreo);




app.listen(4000, ()=>{ console.log('Servidor en el puerto 4000') });
