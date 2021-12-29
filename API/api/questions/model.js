const res = require('express/lib/response');
const database = require('../../database/conection');
function findAll(){
    let db = database.getConnection();
    return db.collection('questions').find({}).toArray()
        .then(function(response){
            return response
        })
        .catch(function(error){
            console.log(error);
        })

}
function createOne(question){
    let db = database.getConnection();
    return db.collection('questions').insertOne(question)
        .then(function(response){
            return response
        })
        .catch(function(error){
            console.log(error);
        })
}

module.exports.findAll = findAll;
module.exports.createOne = createOne;