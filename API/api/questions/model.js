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

module.exports.findAll = findAll;