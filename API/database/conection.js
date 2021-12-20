const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();  

let  database;

const connect = function(){
    return new Promise(function(resolve,reject){
        if(database){
            resolve();
        }
    else{
        mongoClient.connect(process.env.MONGODB_URI,{useNewUrlParser: true})
            .then(function(conection){
                database = conection.db(process.env.MONGODB_DB)
                resolve();
            })
            .catch(function(error){
                reject(error);
            })
    }
    });
}

const getConnection = function(){
    return database;
}

module.exports = {connect, getConnection}