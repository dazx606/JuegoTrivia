import { Col, Row, Form, Container } from "react-bootstrap";
import FormComponent from "../components/FormComponent";
import FormSelect from "../components/FormSelect";
import "../styles/style.css"


export default function Admin(){

    return(
        <>  
                <Container className="my-3 bg-light rounded-3 text-center border">
                <Col md={{ span: 10, offset: 1 }} className="py-3 my-3" >
                    <Row>    
                        <Col md={{ span: 6, offset: 3 }}>  
                            <Form>
                                <FormComponent options="mb-3" id="formQuestion" title="Question" type="text"/>
                            </Form>
                        </Col>   
                    </Row>

                    <Row className="py-3">
                        <Col className="px-3 mx-3">
                            <Form>
                                <FormComponent options="mb-3" id="formResponseA" title="Response A" type="text"/>
                            </Form>
                        </Col>
                        <Col className="px-3 mx-3">
                            <Form>
                                <FormComponent options="mb-3" id="formResponseB" title="Response B" type="text"/>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col className="px-3 mx-3">
                            <Form>
                                <FormComponent options="mb-3" id="formResponseC" title="Response C" type="text"/>
                            </Form>
                        </Col>
                        <Col className="px-3 mx-3">
                            <Form>
                                <FormComponent options="mb-3" id="formResponseD" title="Response D" type="text"/>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col className="px-3 mx-3">
                            <Form>
                            <p>Select the level of the question</p>
                                <FormSelect/>
                            </Form>
                        </Col>
                        <Col className="px-3 mx-3">
                            <Form>
                                <p>Select a genre for the question</p>
                                <FormSelect/>
                            </Form>
                        </Col>
                    </Row>
                    <Row  className="py-3">    
                        <Col md={{ span: 6, offset: 3 }}>  
                            <p>Select the true Response</p>
                            <Form>
                                <Form.Check inline label="Response A" name="group1" type="radio" id="radioA"/>
                                <Form.Check inline label="Response B" name="group1" type="radio" id="radioB"/>
                                <Form.Check inline name="group1" label="Response C" type="radio" id="radioC"/>
                                <Form.Check inline name="group1" label="Response D" type="radio" id="radioD"/>
                                </Form>
                        </Col>   
                    </Row>
                    <Row>    
                        <Col md={{ span: 6, offset: 3 }}>    
                            <p>List Of Questions</p> 
                        </Col>   
                    </Row>
                    <Row>    
                        <Col className="px-3 mx-3">    
                            <p>Select the genre</p> 
                            <FormSelect/>
                        </Col>   
                        <Col className="px-3 mx-3">    
                            <p>Select the level</p> 
                            <FormSelect/>
                        </Col>
                    </Row>
                </Col>  
                </Container>
        </>

    );
}