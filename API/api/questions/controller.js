const express = require('express');
const questionController = express.Router(); //usar rutas y poder importarlas

/*
    GET => get all questions
    POST =>  crete questios
    PUT => update questions
    DELETE => delete questions
*/

questionController.get("/getQuestions", function(req,res){
    //catch the data and send it to the service
    res.send("list of questions")
})

module.exports = questionController;

