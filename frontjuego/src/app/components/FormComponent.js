import { Form } from "react-bootstrap"

function FormComponent(props){
    return(
        
            
                <Form.Group className={props.options} controlId={props.id} >
                    <Form.Label>{props.title}</Form.Label>
                    <Form.Control type={props.type} placeholder={"Enter a " + props.title} value={props.value} />
                </Form.Group>
            
       
    );
}

export default FormComponent;