const questionModel = require('./model')

async function getQuestions(){
    let questions = await questionModel.findAll();
    return questions;
}

async function createQuestion(newQuestion){
    let result = {};
    if (newQuestion && newQuestion.questions[0] && newQuestion.questions[1] 
        && newQuestion.questions[2] && newQuestion.questions[3] && typeof(newQuestion.level) == 'number' && newQuestion.genre ){
            let createResult = await questionModel.createOne(newQuestion);
            if (createResult && createResult.acknowledged){
                result.message = "Question has been created successful";
                result.data = createResult;
            }
            else{
                result.message = "Error"
                result.data = newQuestion
            }
        return result
}

module.exports.getQuestions = getQuestions;