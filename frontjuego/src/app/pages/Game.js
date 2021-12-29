import FormComponent from "../components/FormComponent";
import { Col, Form } from "react-bootstrap";

export default function Game(){

    return(
        <>  <Form>
                <Col md={{ span: 6, offset: 3 }}>
                    <FormComponent title="Response A" id="FormResponseA" type="text" options="mb-3"/>
                </Col>
            </Form>
        </>
    );
}