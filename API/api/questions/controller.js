const express = require('express');
const questionController = express.Router(); //usar rutas y poder importarlas
const questionsSevice = require('./service');

/*
    GET => get all questions
    POST =>  crete questios
    PUT => update questions
    DELETE => delete questions
*/

questionController.get("/getQuestions", async function(req,res){
    let questions = await questionsSevice.getQuestions();
    res.send({
        "message": "List of questions",
        "data": questions
    })
})

questionController.post("/createQuestion", async function(req,res){
    let question = req.body;
    let result = await questionsSevice.createQuestion(question);

    res.send(result)
})

module.exports = questionController;


