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

// uso de rutas
app.use('/usuario', rutaUsuario);
app.use('/persona', rutaPersona);


app.listen(3000, ()=>{ console.log('Servidor en el puerto 3000') });
