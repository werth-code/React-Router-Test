import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function PlantShlf() {

    const getUrl = "http://localhost:8091/plant"

    const [plantData, setPlantData] = useState([]) // useState allows us to set this data with some property using the function - second value in [a, setPlantData ]

    useEffect( () => fetch(`${getUrl}`).then(res => res.json()).then(setPlantData),[plantData.prop])
    
    console.log(plantData)

    const plantCard = plantData.map(plant => {

        if(plant.image_url === null) plant.image_url ="https://www.gardeningknowhow.com/wp-content/uploads/2013/12/leaf-curl.jpg"

            return <div key={plant.common_name} style={{textAlign: 'center', margin: '10px'}}>
                        <Card style={{border: '1px solid black', width: '25rem', padding: '20px', margin: '0 auto'}}>
                            <Card.Img variant="top" src={plant.image_url} style={{ margin: '0 auto', width: '250px' }}/>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>{plant.common_name}</Card.Title>
                                <Card.Text>
                                <p style={{ fontSize: '16px' }}>{plant.scientific_name}</p>
                                <p style={{ fontSize: '16px' }}>{plant.family_common_name}</p>
                                </Card.Text>
                                <Link to={`/update/${plant.common_name}`/* used to be plant.id*/}>
                                    <form method="get" action="">
                                        <Button style={{margin: '10px'}} type="submit" name="update" variant="warning">Update Plant</Button>
                                    </form>
                                </Link>
                                <Link to={`/delete/${plant.common_name}/`}>
                                    <form method="get" action="">  
                                        <Button style={{margin: '10px'}} type="submit" name="del" variant="danger">Delete Plant</Button>
                                    </form>
                                </Link>
                            </Card.Body>
                        </Card> 
                    </div>
                
    });




    return (
        <div>
            <h1>{plantCard}</h1>
        </div>
    )
}