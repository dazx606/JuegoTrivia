import "../styles/style.css"
import { Col,Container, Button, Row} from "react-bootstrap";
import { useState, useEffect } from "react";
import * as questionsService from "../services/questionsService";

export default function Game(){

    const[optionA,setOptionA]=useState('Option 1')
    const[optionB,setOptionB]=useState('Option 2')
    const[optionC,setOptionC]=useState('Option 3')
    const[optionD,setOptionD]=useState('Option 4')
    const[genre,setGenre]=useState('Genre')
    const[question,setQuestion]=useState('Que le pasa a lupita?????')
    const[level,setLevel]=useState('Level 1')

    let questions = []
    var matriz = []
    
    questionsService.getQuestions()
                .then(function(response){
                    questions = response.data
                    for (let i = 1; i <= 6; i ++){
                        let sub = questions.filter(e => e.level == i);
                        matriz.push(sub)
                    }
                })
                .catch(function(error){
                    console.log(error);
                })

    useEffect(()=>{
                
    },[]);

    function handleClick(event){
        event.preventDefault();
        console.log(questions);
        console.log(matriz);
         
    }

    return(
        <>  
            <div className="bg-color d-flex align-items-center text-white">
                <Container className="p-3">
                    <Col xs={{ span: 10, offset: 1 }}>
                        <Container className="bg-color-container p-5 rounded text-center shadow-lg">
                            <Row>
                                <Col>
                                    <Row>
                                       <h1>{genre} {level}</h1> 
                                    </Row>
                                    <Row  className="text-start display-6" >
                                       <p>
                                           {question}
                                       </p>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Button variant="outline-light" className="fs-5 my-2 fw-bold rounded-pill border border-white border-3" 
                                        onClick={handleClick}>
                                            {optionA}</Button>
                                    </Row>
                                    <Row>
                                        <Button variant="outline-light" className="fs-5 my-2 fw-bold rounded-pill border border-white border-3" 
                                        onClick={handleClick}>
                                            {optionB}</Button>
                                    </Row>
                                    <Row>
                                        <Button variant="outline-light" className="fs-5 my-2 fw-bold rounded-pill border border-white border-3" 
                                        onClick={handleClick}>
                                            {optionC}</Button>
                                    </Row>
                                    <Row>
                                        <Button variant="outline-light" className="fs-5 my-2 fw-bold rounded-pill border border-white border-3" 
                                        onClick={handleClick}>
                                            {optionD}</Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>  
                </Container>
            </div>
        </>

    );
}