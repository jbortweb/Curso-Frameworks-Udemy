'use strict'

//Cargar modulos de Node para crear el servidor

var express = require('express');

//Ejecutar express (http)

var app = express();

//Cargar ficheros rutas

//Middlewares

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//CORS

//Añadir prefijos a rutas

app.get('/probando',(req,res) =>{

    return res.status(200).send({

        curso:'Master en Frameworks JS',
        autor: 'Jordi Bort Almiñana',
        url: 'https://www.tuwebentrelineas.es'
    });
});

//Exportar modulo(fichero actual)

module.exports = app;
