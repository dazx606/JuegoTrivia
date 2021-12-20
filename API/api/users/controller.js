const express = require('express');
const userController = express.Router();

/*
    GET -> CREATE PLAYER
    GET -> LOGIN ADMON
*/

userController.get("/prueba",function(req,res){
    res.send("hola")
})

module.exports = userController;