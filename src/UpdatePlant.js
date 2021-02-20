import {useEffect, useState} from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from 'axios'


const UpdatePlant = () => {
   
    const getUrl = "http://localhost:8091/search/type/"
    const {commonName} = useParams();
    

    const [plantData, setPlantData] = useState([]) // useState allows us to set this data with some property using the function - second value in [a, setPlantData ]

    console.log(plantData)

    useEffect(() => {
       fetch(`${getUrl}${commonName}`).then(res => res.json()).then(setPlantData) // now we can actually set the state and access the variable since we have a function.
    }, [commonName])


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

                    <Form>

                        <Form.Group controlId="form-sciname">
                            <Form.Label>Plant Name</Form.Label>
                            <Form.Control type="text" placeholder={plantData.common_name} />
                        </Form.Group>

                        <Form.Group controlId="form-sciname">
                            <Form.Label>Scientific Name</Form.Label>
                            <Form.Control type="text" placeholder={plantData.scientific_name} />
                        </Form.Group>

                        <Form.Group controlId="form-famname">
                            <Form.Label>Family Name</Form.Label>
                            <Form.Control type="text" placeholder={plantData.family_common_name} />
                        </Form.Group>

                        <form action={`http://localhost:3000/users/${'shlf'}`} onSubmit={console.log(`Deleted Plant ${plantData.commonName}`)}>
                            <Button onClick={apiCall('PUT', 'http://localhost:8091/plant/' + plantData.id, 
                                {
                                    common_name: "Male fern",
                                    family: "Polypodiaceae",
                                    family_common_name: "NICe family",
                                    genus: "Dryopteris",
                                    genus_id: 572,
                                    id: 130506,
                                    image_url: "https://bs.floristic.org/image/o/3b39ae0843fb6bacb96cee2d7342bb84144311d5",
                                    scientific_name: "Dryopteris filix-mas"         
                                }
                            )} type="submit" variant="warning">Update</Button>
                        </form>

                    </Form>


                </Card.Body>
                </Card> 
            </div>

            // <div style={{textAlign: 'center', margin: '10px'}}>
            //     <Card style={{border: '1px solid black', width: '25rem', padding: '10px', margin: '0 auto'}}>
            //         <h1>Update</h1>
            //     <Card.Body>

            //         <h1>{plantData.common_name + " " + plantData.id}</h1>
                    
            //         <form action={`http://localhost:3000/users/${'shlf'}`} onSubmit={console.log(`Deleted Plant ${plantData.commonName}`)}>
            //             <Button onClick={apiCall('PUT', 'http://localhost:8091/plant/' + plantData.id, {})} type="submit" variant="warning">Update</Button>
            //         </form>

            //     </Card.Body>
            //     </Card> 
            // </div>
    )
}
export default UpdatePlant;



//     const getUrl = "http://localhost:8091/search/type/"
//     const {commonName} = useParams();
    

//     const [plantData, setPlantData] = useState([]) // useState allows us to set this data with some property using the function - second value in [a, setPlantData ]

//     useEffect(() => {
//        fetch(`${getUrl}${commonName}`).then(res => res.json()).then(setPlantData) // now we can actually set the state and access the variable since we have a function.
//     }, [commonName])

//     //essentially, useEffect is called upon loading the page and then once every time a variable in it's [] changes. Here we have it fetch our backend api service
//     //and assign the result through useState to plantData.

//     function apiCall(method, url, data) {
//         return new Promise((resolve, reject) =>
//         axios({
//             method,
//             url,
//             params: { origin: "*" },
//             data
//         }).then(res => { resolve(res.data)  })
//           .catch((err) => {
//             if (err.response) reject(err.response.data);
//             else if (err.request) reject(err);
//             else reject(err)
//       })
//   )
// }


//     return (
//             <div style={{textAlign: 'center', margin: '10px'}}>
//                 <Card style={{border: '1px solid black', width: '25rem', padding: '10px', margin: '0 auto'}}>
//                     <h1>{plantData.common_name}</h1>
//                 <Card.Img variant="top" src={plantData.image_url} style={{ margin: '0 auto', width: '250px' }}/>
//                 <Card.Body>
//                     <Card.Title style={{ fontWeight: 'bold' }}>{plantData.common_name}</Card.Title>
//                     <Card.Text>
//                     <p>{plantData.scientific_name}</p>
//                     <p>{plantData.family_common_name}</p>
//                     </Card.Text>
                     
//                     <form action="http://localhost:3000/#/users/id/:plant" onSubmit={console.log("Submitted Form")}>
//                         <Button onClick={apiCall('POST', 'http://localhost:8091/plant', plantData)} type="submit" variant="success">Add To Shlf</Button>
//                     </form>

//                 </Card.Body>
//                 </Card> 
//             </div>
//     )
// }
// export default PlantDetail;