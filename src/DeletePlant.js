import {useEffect, useState} from 'react'
import { Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from 'axios'


const DeletePlant = () => {

    const getUrl = "http://localhost:8091/search/type/"
    const {commonName} = useParams();

    const [plantData, setPlantData] = useState([]) // useState allows us to set this data with some property using the function - second value in [a, setPlantData ]

    useEffect(() => {
       fetch(`${getUrl}${commonName}`).then(res => res.json()).then(setPlantData) // now we can actually set the state and access the variable since we have a function.
    })


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


    return (
            <div style={{textAlign: 'center', margin: '10px'}}>
                <Card style={{border: '1px solid black', width: '25rem', padding: '10px', margin: '0 auto'}}>
                    <h1>Are You Sure?</h1>
                <Card.Body>

                        <form action={`http://localhost:3000/users/${'shlf'}`}>
                            <Button onClick={() => apiCall('DELETE', 'http://localhost:8091/plant/' + plantData.id, {})} type="submit" variant="danger">Verify Delete</Button>
                        </form>

                </Card.Body>
                </Card> 
            </div>
    )
}
export default DeletePlant;