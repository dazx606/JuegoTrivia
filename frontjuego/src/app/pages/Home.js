import { useState } from "react";
import { Row, Col, Button, Toast, Form, Container } from "react-bootstrap";


export default function Home(){

    const [showA, setShowA] = useState(false);  
    const toggleShowA = () => setShowA(!showA);

    return(
        <>  
                        <Row>
                <Col md={6} className="mb-2 p-2 px-4">
                    <Button onClick={toggleShowA} className="mb-2" variant="secondary">
                    Login for admins
                    </Button>
                    <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                        />
                        <strong className="me-auto">Login</strong>
                        <small>only for admins</small>
                    </Toast.Header>
                    <Toast.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupUser">
                                <Form.Label>Admin Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter user name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="secondary" type="Buttom">
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
                        <Container className="p-5 bg-light rounded-3 border text-center">
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
                            <Button variant="secondary" type="Buttom">
                                Play
                            </Button>{' '}
                          
                        </Form>
                        </Container>
                    </Col>
                    
                </Container>
            </Row>
    
            
        </>
        
    );
}