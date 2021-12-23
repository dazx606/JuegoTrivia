
import { Form,Col,Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


export default function Home(){

    return(
        <>  

            <Container className="p-3">
                <Col xs={{ span: 6, offset: 3 }}>
                    <Container className="p-5 bg-light rounded-3 border text-center">
                    <h1 className="header">Login for admins</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupUser">
                            <Form.Label>Admin Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="Buttom">
                            Submit
                        </Button>{' '}
                        <Button variant="primary" type="Buttom">
                            Cancel
                        </Button>
                    </Form>
                    </Container>
                </Col>
                
            </Container>
            
        </>
        
    );
}