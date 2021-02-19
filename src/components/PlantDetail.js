import {useEffect, useState} from 'react'
import { Card, Button } from 'react-bootstrap';
import { useParams, Route, Link} from "react-router-dom";
import axios from 'axios'


const PlantDetail = () => {

    const getUrl = "http://localhost:8091/search/type/"
    const {commonName} = useParams();
    

    const [plantData, setPlantData] = useState([]) // useState allows us to set this data with some property using the function - second value in [a, setPlantData ]

    useEffect(() => {
       fetch(`${getUrl}${commonName}`).then(res => res.json()).then(setPlantData) // now we can actually set the state and access the variable since we have a function.
    }, [commonName])

    //essentially, useEffect is called upon loading the page and then once every time a variable in it's [] changes. Here we have it fetch our backend api service
    //and assign the result through useState to plantData.

    function apiCall(method, url, data) {
        return new Promise((resolve, reject) =>
        axios({
            method,
            url,
            params: { origin: "*" },
            data
        }).then(res => { resolve(res.data)  })
          .catch((err) => {
            if (err.response) reject(err.response.data);
            else if (err.request) reject(err);
            else reject(err)
      })
  )
}


    return (
            <div style={{textAlign: 'center', margin: '10px'}}>
                <Card style={{border: '1px solid black', width: '25rem', padding: '10px', margin: '0 auto'}}>
                    <h1>{plantData.common_name}</h1>
                <Card.Img variant="top" src={plantData.image_url} style={{ margin: '0 auto', width: '250px' }}/>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>{plantData.common_name}</Card.Title>
                    <Card.Text>
                    <p>{plantData.scientific_name}</p>
                    <p>{plantData.family_common_name}</p>
                    </Card.Text>
                     
                    <form action="http://localhost:3000/#/users/id/:plant" onSubmit={console.log("Submitted Form")}>
                        <Button onClick={apiCall('POST', 'http://localhost:8091/plant', plantData)} type="submit" variant="success">Add To Shlf</Button>
                    </form>

                </Card.Body>
                </Card> 
            </div>
    )
}
export default PlantDetail;