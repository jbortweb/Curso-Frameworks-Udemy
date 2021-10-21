'use strict'

var controller = {

    datosCurso: (req, res) => {
        var hola = req.body.hola;

        return res.status(200).send({

            curso:'Master en Frameworks JS',
            autor: 'Jordi Bort Almiñana',
            url: 'https://www.tuwebentrelineas.es',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción de mi controlador de articulos'
        });
    }
}; //Fin del controller

module.exports = controller;