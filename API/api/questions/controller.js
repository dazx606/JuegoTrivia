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

questionController.get("/getGenres", async function(req,res){
    let genres = await questionsSevice.getGenres();
    res.send({
        "message":"List of genres",
        "data": genres
    })
})

questionController.get("/getLevels", async function(req,res){
    let levels = await questionsSevice.getLevels();
    res.send({
        "message" : "List of Levels",
        "data" : levels
    });
})

questionController.post("/createQuestion", async function(req,res){
    let question = req.body;
    let result = await questionsSevice.createQuestion(question);

    res.send(result)
})

questionController.delete("/deleteQuestion", async function(req,res){
    let id = req.query.id;
    let result = await questionsSevice.deleteQuestion(id);
    res.send(result)
})

questionController.get("/getById/:id", async function(req,res){
    let id = req.params.id;
    let question = await questionsSevice.getById(id);
    res.send({
        "message" : "Details of question",
        "data" : question
    })
})

questionController.put("/updateQuestion/:id", async function(req, res){
    let id = req.params.id;
    let newData = req.body;
    let result = await questionsSevice.updateQuestion(id, newData);
    res.send(result)
})

module.exports = questionController;


