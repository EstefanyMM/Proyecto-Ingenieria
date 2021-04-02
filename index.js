const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

//Importar Rutas
var rutaPersona = require('./router/persona');
var rutaEstudiante = require('./router/estudiante');
var rutaCorreo = require('./router/correo');
var rutaMaestro = require('./router/maestro');
var rutaAdministrador = require('./router/administrador');
var rutaIdioma = require('./router/idioma');
var rutaMaestroIdioma = require('./router/maestroIdioma');
var rutaSeccion = require('./router/seccion');
var rutaSeccionIdioma = require('./router/seccionIdioma');
var rutaFactura = require('./router/factura');
var rutaMatricula = require('./router/matricula');
var rutaCalificacion = require('./router/calificacion');
var rutaEstudianteIdioma = require('./router/estudianteIdioma');
var rutaEvento = require('./router/evento');
var rutaAsignacion = require('./router/asignacion');
var rutaAsignacionIdioma = require('./router/asignacionIdioma');
var rutaArchivo = require('./router/archivo');
var rutaArchivoIdioma = require('./router/archivoIdioma');

//Uso de rutas
app.use('/persona', rutaPersona);
app.use('/estudiante', rutaEstudiante);
app.use('/correo', rutaCorreo);
app.use('/maestro', rutaMaestro);
app.use('/administrador', rutaAdministrador);
app.use('/idioma', rutaIdioma);
app.use('/maestroIdioma', rutaMaestroIdioma);
app.use('/seccion', rutaSeccion);
app.use('/seccionIdioma', rutaSeccionIdioma)
app.use('/factura', rutaFactura);
app.use('/matricula', rutaMatricula);
app.use('/calificacion', rutaCalificacion);
app.use('/estudianteIdioma', rutaEstudianteIdioma);
app.use('/evento', rutaEvento);
app.use('/asignacion', rutaAsignacion);
app.use('/asignacionIdioma', rutaAsignacionIdioma);
app.use('/archivo', rutaArchivo);
app.use('/archivoIdioma', rutaArchivoIdioma);

app.listen(3001, ()=>{ console.log('Servidor en el puerto 3001') });