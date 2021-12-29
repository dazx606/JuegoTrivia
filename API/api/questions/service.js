const questionModel = require('./model')

async function getQuestions(){
    let questions = await questionModel.findAll();
    return questions;
}

async function createQuestion(newQuestion){
    let result = {};
    if (newQuestion && typeof(newQuestion.questions[0]) == 'object' && typeof(newQuestion.questions[1]) == 'object' 
        && typeof(newQuestion.questions[2]) == 'object' && typeof(newQuestion.questions[3]) == 'object' 
        && typeof(newQuestion.level) == 'number' && newQuestion.genre ){
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
    else{
        result.message = "information is missing check and try again"
        result.data = newQuestion

        return result
    }
}

module.exports.getQuestions = getQuestions;
module.exports.createQuestion = createQuestion;