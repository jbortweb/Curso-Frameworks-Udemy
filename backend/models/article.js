'use strict'

//Modelo para articulos//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = Schema({

    tittle: String,
    content: String,
    date: {type:Date, default:Date.now},
    image: String
});

module.exports = mongoose.model('Article', ArticleSchema);

//mongoose crea articles en plural donde guarda los documentos de tu coleccion
