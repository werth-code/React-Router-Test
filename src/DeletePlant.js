import {useEffect, useState} from 'react'
import { Card, Button } from 'react-bootstrap';
import { useParams, Link, useHistory } from "react-router-dom";
import axios from 'axios'
import { useForm } from "react-hook-form";


const DeletePlant = () => {

    const getUrl = "http://localhost:8091/search/type/"
    const {commonName} = useParams();

    const [plantData, setPlantData] = useState([]) // useState allows us to set this data with some property using the function - second value in [a, setPlantData ]

    useEffect(() => fetch(`${getUrl}${commonName}`).then(res => res.json()).then(setPlantData), [])

    const history = useHistory({forceRefresh:true})

    function apiCall(method, url, data) {
        return new Promise((resolve, reject) =>
        axios({
            method,
            url,
            params: { origin: "*" },
            data
        }).then(res => { resolve(res.data)  })
          .catch((err) => console.log(err))
        )
    }   

    const { handleSubmit, errors } = useForm();
    
    const onSubmit = plantInput => { 
        apiCall('DELETE', 'http://localhost:8091/plant/' + plantData.id, {}).then( () => history.push('/shlf'))
    }


    return (
            <div style={{textAlign: 'center', margin: '10px'}}>
                <Card style={{border: '1px solid black', width: '25rem', padding: '10px', margin: '0 auto'}}>
                    <h5>Are You Sure?</h5>
                <Card.Body>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        {errors.exampleRequired && <p>This field is required</p>}
                        
                        <Button type="submit" variant="danger">Delete</Button>
                    </form>

                </Card.Body>
                </Card> 
            </div>
    )
}
export default DeletePlant;

                        