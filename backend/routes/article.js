'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

//rutas prueba
router.post('/datos-curso',ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

//Rutas utiles

router.post('/save', ArticleController.save);

router.get('/articles/:last?', ArticleController.getArticles);



module.exports = router;