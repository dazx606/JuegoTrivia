import { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import * as questionsService from "../services/questionsService";

function ListOfQuestions(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const handleShow = (event) => { //function eliminate 
        setShow(true);
        event.preventDefault();
        const id_question = event.target.value
        setPrueba(id_question);
    };

    const [prueba, setPrueba] = useState('')

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
            case 'btn-delete-modal':
                questionsService.deleteOne(prueba)
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
                    setShow(false)
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
                            <Button variant="secondary" type="Buttom" value={question._id}
                             className="m-1" onClick={handleClick} name="btn-edit">Edit</Button>

                            <Button variant="secondary" type="Buttom" value={question._id} 
                            className="m-1" onClick={handleShow} name="btn-delete">Delete</Button>
                        </td>
                    </tr>

                ))
                
                }
                    
            </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Alert!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Question will be deleted, do you want to continue?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClick} name="btn-delete-modal">
                Delete
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Cancel
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ListOfQuestions