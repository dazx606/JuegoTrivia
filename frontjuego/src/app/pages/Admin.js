import { useEffect, useState } from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import FormComponent from "../components/FormComponent";
import "../styles/style.css"
import ListOfQuestions from "../components/ListOfQuestions";
import * as questionsService from "../services/questionsService";
import FormSelectGenres from "../components/FormSelectGenres";
import FormSelectLevel from "../components/FormSelectLevel";


export default function Admin(){

    const [question, setQuestion] = useState('');
    const [responseA, setResponseA] = useState('');
    const [responseB, setResponseB] = useState('');
    const [responseC, setResponseC] = useState('');
    const [responseD, setResponseD] = useState('');
    const [radio,setRadio] = useState('false')

    
    /*const [id, setId] = useState('');

    useEffect(()=>{
        if(id){
            questionsService
        }
    })*/
    
    function handleChange(event){
        event.preventDefault();
        const {id, value} = event.target;
        switch(id){
            case 'formQuestion':
                setQuestion(value);
            break;
            case 'formResponseA':
                setResponseA(value);
            break;
            case 'formResponseB':
                setResponseB(value);
            break;
            case 'formResponseC':
                setResponseC(value);
            break;
            case 'formResponseD':
                setResponseD(value);
            break;
            default:
            break;
        }
    }
    const handleSubmit = (event) => {
          event.preventDefault();
          event.stopPropagation();
        }
    
    const handleClick = (event) => {
        event.preventDefault();
        let question = document.getElementById("formQuestion").value;
        let responseA = document.getElementById("formResponseA").value;
        let valueA = document.getElementById("radioA").checked;
        let responseB = document.getElementById("formResponseB").value;
        let valueB = document.getElementById("radioB").checked;
        let responseC = document.getElementById("formResponseC").value;
        let valueC = document.getElementById("radioC").checked;
        let responseD = document.getElementById("formResponseD").value;
        let valueD = document.getElementById("radioD").checked;
        let genre = document.getElementById("genreSelect").value;
        let level = parseInt(document.getElementById("levelSelect").value);
        const data = {
            "question" : question,
            "responses":[{"answer":responseA,"value":valueA},
                         {"answer":responseB,"value":valueB},
                         {"answer":responseC,"value":valueC},
                         {"answer":responseD,"value":valueD}],
            "genre":genre,
            "level":level
        }
        if(question.length > 5){ 
            if(responseA.length > 1 && responseB.length > 1 && responseC.length > 1 && responseD.length > 1 ){
                if(document.getElementById("radioA").checked || document.getElementById("radioB").checked
                || document.getElementById("radioC").checked || document.getElementById("radioD").checked){
                    
                    if(document.getElementById("levelSelect").value !== "Open this select menu" && document.getElementById("genreSelect").value !== "Open this select menu"){
                        questionsService.createQuestion(data)
                        .then(function(response){
                            console.log(data);
                        })
                        .catch(function(error){
                            console.log(error);
                        })
                        setQuestion('');
                        setResponseA('');
                        setResponseB('');
                        setResponseC('');
                        setResponseD('');
                        setRadio(false);
                        
                    } 
                    else{ alert("Select a valid Genre or Level")}
                }
                else{
                    alert("Check the true response")
                }  
            }
            else{
                alert("Check the responses and try again, it must have more than 5 characters")
            }
        }
        else{
            alert("Length of question must have more than 5 characters")
        } 
        }

    return(
        <>  
                <Container className="my-3 bg-light rounded-3 text-center border">
                <Col md={{ span: 10, offset: 1 }} className="py-3 my-3" >
                    <Row>    
                        <Col md={{ span: 6, offset: 3 }}>  
                            <Form onSubmit={handleSubmit} onChange={handleChange}>
                                <FormComponent options="mb-3" id="formQuestion" title="Question" type="text" value={question} />
                            </Form>
                        </Col>   
                    </Row>

                    <Row className="py-3">
                        <Col className="px-3 mx-3">
                            <Form onSubmit={handleSubmit} onChange={handleChange}>
                                <FormComponent options="mb-3" id="formResponseA" title="Response A" type="text" value={responseA} />
                            </Form>
                        </Col>
                        <Col className="px-3 mx-3">
                            <Form onSubmit={handleSubmit} onChange={handleChange}>
                                <FormComponent options="mb-3" id="formResponseB" title="Response B" type="text" value={responseB}/>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col className="px-3 mx-3">
                            <Form onSubmit={handleSubmit} onChange={handleChange}>
                                <FormComponent options="mb-3" id="formResponseC" title="Response C" type="text" value={responseC}/>
                            </Form>
                        </Col>
                        <Col className="px-3 mx-3">
                            <Form onSubmit={handleSubmit} onChange={handleChange}>
                                <FormComponent options="mb-3" id="formResponseD" title="Response D" type="text" value={responseD} />
                            </Form>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col className="px-3 mx-3">
                            <Form>
                            <p>Select the level of the question</p>
                                <FormSelectLevel id="levelSelect"/>
                            </Form>
                        </Col>
                        <Col className="px-3 mx-3">
                            <Form>
                                <p>Select a genre for the question</p>
                                <FormSelectGenres id="genreSelect"/>
                            </Form>
                        </Col>
                    </Row>
                    <Row  className="py-3">    
                        <Col md={{ span: 6, offset: 3 }}>  
                            <p>Select the true Response</p>
                            <Form>
                                <Form.Check inline label="Response A" type="radio" id="radioA" 
                                value="radioA" checked={radio === "radioA"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                
                                <Form.Check inline label="Response B" type="radio" id="radioB" 
                                value="radioB" checked={radio === "radioB"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                
                                <Form.Check inline label="Response C" type="radio" id="radioC" 
                                value="radioC" checked={radio === "radioC"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                
                                <Form.Check inline label="Response D" type="radio" id="radioD" 
                                value="radioD" checked={radio === "radioD"} onChange={(e)=>{setRadio(e.target.value)}}/>
                            </Form>
                                <Button variant="secondary" type="Buttom" className="m-3" onClick={handleClick}>Create</Button>
                        </Col>   
                    </Row>
                    <Row>    
                        <Col md={{ span: 6, offset: 3 }}>    
                            <h2>List Of Questions</h2> 
                        </Col>   
                    </Row>
                    <ListOfQuestions/>
                </Col>  
                </Container>
        </>

    );
}