'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Article = require('../models/article');
const { exists } = require('../models/article');

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
    },

    save: (req, res) => {
        
        //Recoger parametros cliente por POST

        var params = req.body;

        console.log('Hola, que tal');

        //Validar Datos

        try{

            var validate_title = !validator.isEmpty(params.title);  //comprobamos que los campos no esten vacios

            var validate_content = !validator.isEmpty(params.content);

        }catch(err){

            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            })
        }

        if(validate_title && validate_content){

            //Crear el objeto a guardar

            var article = new Article();

            //Asignar valores

            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //Guardar el articulo

            article.save((err, articleStored) =>{

                if (err || !articleStored){

                    return res.status(404).send({
                        status: 'error',
                        message: 'El artículo no se ha guardado'
                    }); 
                }

            //Devolver una respuesta

                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });
            });
            
        }else{

            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            }) 
        }
    },

    getArticles: (req, res) => {

        var query = Article.find({});
        var last = req.params.last;

        if(last || last !=undefined){
            query.limit(5);
        }
        
       //Find

       query.sort('-_id').exec((err, articles) =>{
        
            if(err) {
                
                return res.status(500).send({
                status: 'error',
                message: 'Error al devolver los artículos'
                });
            }

            if (!articles){

                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artículos para mostrar'
                    });
            }
            
            return res.status(200).send({
                status: 'success',
                articles
                });
        });
    },

    getArticle: (req, res) => {

        //Recoger el id

        var articleId = req.params.id;

        //Comprobar que existe

        if(!articleId || articleId == null) {

            return res.status(404).send({
                status: 'error',
                message: 'No existe el artículo'
            });
        }

        //Buscar el articulo

        Article.findById(articleId, (err,article) => {

            if(err || !article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Error al devolver los datos'
                });
            }

            //devolverlo en json
            return res.status(404).send({
                status: 'success',
                article
            });
        });      
    },

    update: (req, res) => {

        //Recoger el id del articulo por la url

        var articleId = req.params.id;

        //Recoger los datos que llegan por put

        var params = req.body;

        //Validar datos

        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content){
            //Find and update
            Article.findOneAndUpdate({_id: articleId}, params, {new:true},(err, articleUpdated) =>{

                if(err){

                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    });
                }
                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el artículo'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });

        }else {
                //Devolver respuesta
            return res.status(200).send({
                status: 'error',
                message: 'La validación no es correcta'
            });
        }        
    },

    delete : (req, res) => {

        //Recoger id de la url
        var articleId= req.params.id;

        //Find and delete

        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) =>{

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
                });
            }

            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente ya no exista'
                });
            }
            
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });

        });
    },

    upload : (req, res) =>{

        // Configurar módulo del connect multiparty router/article.js

        // Recoger el fichero de la petición

        var file_name ='Imagen no subida...';

        if(!req.files) {

            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        // Conseguir el nombre y la extension del archivo

        var file_path = req.files.file0.path;
        var file_split = file_path.split("/");

        //nombre del archivo

        file_name = file_split[2];

        //Extension del fichero

        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];        

        // Comprobar la extensión, solo imagenes, si no es valido borrar el archivo

        if(file_ext !='jpg' && file_ext !='png' && file_ext !='jpeg' && file_ext !='gif'){

            //Borrar el archivo subido

            fs.unlink(file_path,(err) => {
                
                return res.status(200).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es valida'
                });
            });
        
        }else{

            //Si todo es valido, sacamos id de la url

            var articleId = req.params.id;

            // Buscar el artículo, asignarle el nombre de la imagen y actualizarlo

            Article.findOneAndUpdate({_id:articleId}, {image: file_name}, {new: true}, (err, articleUpdated) => {

                if(err || !articleUpdated){

                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen del artículo'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });                
            });
        }       
    }, // End upload file

    getImage: (req, res) => {

        var file = req.params.image;
        var path_file = './upload/articles/'+file;

        fs.stat(path_file, (exists) => {

            if(stats){
                return res.sendFile(path.resolve(path_file));

            }else {

                return res.status(404).send({
                status: 'error',
                message: 'La imagen no existe'
                });
            }
        });
        
    },
 
}; //Fin del controller

module.exports = controller;