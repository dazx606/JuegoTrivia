import { useState } from "react";
import { Row, Col, Button, Toast, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import FormComponent from "../components/FormComponent";
import "../styles/style.css"



export default function Home(){

    const [showA, setShowA] = useState(false);  
    const toggleShowA = () => setShowA(!showA);
    let history = useHistory();

    function handleClick(event){
        event.preventDefault()
        const {name} = event.target;
        switch (name){
            case 'admin': 
                history.push("/Admin"); 
            break;
            case 'play': 
                history.push("/Game"); 
            break;
            default: 
            break;
        }
        

    }

    return(
        <>  
        <div class="bg">
            <Row>
                <Col md={6} className="mb-2 p-2 px-4">
                    <Button onClick={toggleShowA} className="mb-2" variant="secondary">
                    Login for admins
                    </Button>
                    <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img
                        id="toaster"
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                        />
                        <strong className="me-auto">Login</strong>
                        <small>only for admins</small>
                    </Toast.Header>
                    <Toast.Body>
                        <Form> 
                            <FormComponent title="Admin Name" id="formAdminName" type="text" options="mb-3"/>
                            <FormComponent title="Password" id="formPassword" type="password" options="mb-3"/>
                            <Button onClick={handleClick} variant="secondary" type="Buttom" name="admin" >
                                Submit
                            </Button>{' '}
                        </Form>
                    </Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Row>
                <Container className="p-3">
                    <Col xs={{ span: 6, offset: 3 }}>
                        <Container className="p-5 bg-light rounded-3 text-center bg-opacity-50">
                        <h1 className="header">Let's Play</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupLasteName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" />
                            </Form.Group>
                            <Button variant="secondary" type="Buttom" name="play" onClick={handleClick}>
                                Play
                            </Button>{' '}
                          
                        </Form>
                        </Container>
                    </Col>
                    
                </Container>
            </Row>
            </div>
            
        </>
        
    );
}