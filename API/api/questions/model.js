const database = require('../../database/conection');
const objectId = require('mongodb').ObjectId;

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

function findGenres(){
    let db = database.getConnection();

    return db.collection('genres').find({}).toArray()
        .then(function(response){
            return response
        })
        .catch(function(error){
            console.log(error);
        })
}

function findLevels(){
    let db = database.getConnection();

    return db.collection('levles').find({}).toArray()
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

function deleteOne(id){
    let db = database.getConnection();
    return db.collection('questions').deleteOne({"_id":objectId(id)})
        .then(function(result){
            
            return result 
            
        })
        .catch(function(error){
            
            console.log("no se elimino");
        })
}

function searchById(id){
    let db = database.getConnection();
    return db.collection('questions').findOne({"_id":objectId(id)})
        .then(function(response){
            return response;
        })
        .catch(function(error){
            console.log(error);
        })
}

function updateOne(id, newData){
    let db = database.getConnection();
    return db.collection('questions').updateOne(
        {"_id":objectId(id)}, //filtro
        {"$set":newData} //Operacion para actualizar ----$set, $unset
    )
    .then(function(response){
        return response
    })
    .catch(function(error){
        console.log(error);
    })
}

module.exports.findAll = findAll;
module.exports.createOne = createOne;
module.exports.findGenres = findGenres;
module.exports.findLevels = findLevels;
module.exports.deleteOne = deleteOne;
module.exports.searchById = searchById;
module.exports.updateOne = updateOne;