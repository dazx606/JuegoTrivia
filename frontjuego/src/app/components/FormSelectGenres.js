import { Form } from "react-bootstrap";
import * as questionsService from "../services/questionsService";
import { useEffect, useState } from "react";

function FormSelectGenres(props){

    const [genres, setGenres] = useState([])
    useEffect(()=>{
        questionsService.getGenres()
            .then(function(response){
                setGenres(response.data)
            })
            .catch(function(error){
                console.log(error);
            })
    },[]);

    return(
        <>
            <Form.Select aria-label="Default select example" id={props.id}>
                <option>Open this select menu</option>
                {genres && genres.map(genre =>(
                    <option value={genre.name} key={genre._id}>{genre.name}</option>
                )) }
                
            </Form.Select>
        </>
    );
}

export default FormSelectGenres;