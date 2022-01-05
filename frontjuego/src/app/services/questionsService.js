import { URL_API_GAME } from "../config/config";

export function createQuestion(question){
    const path = "/questions/createQuestion"

    const config = {
        method : "POST",
        mode : "cors",
        body: JSON.stringify(question),
        headers: {
            "content-type":"application/json"
        }
    }

    return fetch(URL_API_GAME + path, config )
        .then(function(response){
            if(response.ok){
                return response.json()
            }
            else{
                return Promise.reject(response.statusText)
            }
        })
        .catch(function(error){
            console.log(error);
        })
}

export function getQuestions(){
    const path = "/questions/getQuestions";
    const config = {
        method : "GET",
        mode : "cors"      
    }
    return fetch (URL_API_GAME + path, config)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        else{
            return Promise.reject(response.statusText);
        }
    })
    .catch(function(error){
        console.log(error);
    })
}

export function getGenres(){
    const path ="/questions/getGenres";
    const config = {
        method : "GET",
        mode : "cors"
    }
    return fetch(URL_API_GAME + path, config)
        .then(function(response){
            if(response.ok){
                return response.json();
            }
            else{
                return Promise.reject(response.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        })
}

export function getLevels(){
    const path = "/questions/getLevels";
    const config = {
        method : "GET",
        mode : "cors"
    }
    return fetch(URL_API_GAME + path, config)
        .then(function(response){
            if(response.ok){
                return response.json();
            }
            else{
                return Promise.reject(response.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        })
}

export function deleteOne(id){
    const path = "/questions/deleteQuestion?id=" + id;
    const config = {
        method : "DELETE",
        mode : "cors"
    }
    return fetch(URL_API_GAME + path, config)
        .then(function(response){
            if(response.ok){
                return response.json();
            }
            else{
                return Promise.reject(response.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        })
}