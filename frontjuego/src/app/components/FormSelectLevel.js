import { Form } from "react-bootstrap";
import * as questionsService from "../services/questionsService";
import { useEffect, useState } from "react";

function FormSelectLevel(props){

    const [levels,setLevels] = useState([]);
    useEffect(()=>{
        questionsService.getLevels()
            .then(function(response){
                setLevels(response.data)
            })
            .catch(function(error){
                console.log(error);
            })
    },[]);

    return(
        <>
            <Form.Select aria-label="Default select example" id={props.id}>
                <option>Open this select menu</option>
                {levels && levels.map(level =>(
                    <option value={level.level} key={level._id}>{level.level}</option>
                ))}
                
            </Form.Select>
        </>
    );
}

export default FormSelectLevel;