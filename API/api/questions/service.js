const res = require('express/lib/response');
const questionModel = require('./model')

async function getQuestions(){
    let questions = await questionModel.findAll();
    return questions;
}

async function getGenres(){
    let genres = await questionModel.findGenres();
    return genres
}

async function getLevels(){
    let levels = await questionModel.findLevels();
    return levels
}

async function createQuestion(newQuestion){
    let result = {};
    if (newQuestion && newQuestion.question &&typeof(newQuestion.responses[0]) == 'object' && typeof(newQuestion.responses[1]) == 'object' 
        && typeof(newQuestion.responses[2]) == 'object' && typeof(newQuestion.responses[3]) == 'object' 
        && typeof(newQuestion.level) == 'number' && newQuestion.genre ){
            let createResult = await questionModel.createOne(newQuestion);
            if (createResult && createResult.acknowledged){
                result.message = "Question has been created successful";
                result.data = createResult;
                console.log(result);
            }
            else{
                result.message = "Error"
                result.data = newQuestion
                console.log(result);
            }
    
        return result
    }
    else{
        result.message = "information is missing check and try again"
        result.data = newQuestion
        console.log(result);

        return result
    }
}

async function deleteQuestion(id){
    let result = {}
    if(id && id.length == 24 && /^[0-9A-F]+$/i.test(id)){
        let resultDelete = await questionModel.deleteOne(id);
        if (resultDelete && resultDelete.acknowledged ){
            result.message = "Delated correctly"
            result.data = resultDelete;
        }
        else{
            result.message = "Error";
            result.data = id;
        }
    }
    else{
        result.message = "invalid ID";
        result.data = id
    }
    return result
}

async function getById(id){
    if(id){
        let question = await questionModel.searchById(id);
        if(question){
            return question
        }
        else{
            return "insert valid ID"
        }
    }
    else{
        return "insert an ID"
    }
}

async function updateQuestion(id, newData){
    let result = {};
    if(id.length == 24 && /^[0-9A-F]+$/i.test(id)){
        let updateResults = await questionModel.updateOne(id, newData);
        if(updateResults && updateResults.acknowledged){
            result.message = "update successful";
            result.data = updateResults;
        }
        else{
            result.message = "Error";
            result.data = {"id":id,"data":data};
        }   
    }
    else{
        result.message = "Invalid ID"
        result.data = id
    }
    return result
}

module.exports.getQuestions = getQuestions;
module.exports.createQuestion = createQuestion;
module.exports.getGenres = getGenres;
module.exports.getLevels = getLevels;
module.exports.deleteQuestion = deleteQuestion;
module.exports.getById = getById;
module.exports.updateQuestion = updateQuestion;