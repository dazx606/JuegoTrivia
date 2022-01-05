import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import * as questionsService from "../services/questionsService";

function ListOfQuestions(props){

    const [questions, setQuestions] = useState([]) 
    useEffect(()=>{
        questionsService.getQuestions()
            .then(function(response){
                setQuestions(response.data)
            })
            .catch(function(error){
                console.log(error);
            })
    },[]);


    function handleClick(event){
        event.preventDefault();
        const {name, value} = event.target;
        const id_question = value
        switch(name){
            case 'btn-delete':
                questionsService.deleteOne(id_question)
                    .then(function(response){
                        if(response.data.acknowledged){
                            alert(response.message)
                            questionsService.getQuestions()
                                .then(function(response){
                                    setQuestions(response.data)
                                })
                                .catch(function(error){
                                    console.log(error);
                                })
                             
                        }
                    })
            break;
            case 'btn-edit':
                props.setId(id_question)
            break;
            default:
                break;
        }

    }

    

    return(
        <>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Question</th>
                <th>Genre</th>
                <th>Level</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {questions && questions.map(question =>(

                    <tr key={question._id}>
                        <td>{question.question}</td>
                        <td>{question.genre}</td>
                        <td >{question.level}</td>
                        <td>
                            <Button variant="secondary" type="Buttom" value={question._id} className="m-1" onClick={handleClick} name="btn-edit">Edit</Button>
                            <Button variant="secondary" type="Buttom" value={question._id} className="m-1" onClick={handleClick} name="btn-delete">Delete</Button>
                        </td>
                    </tr>

                ))
                
                }
                    
            </tbody>
        </Table>
        </>
    );
}

export default ListOfQuestions