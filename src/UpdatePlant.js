import {useEffect, useState} from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import { useParams, Link, useHistory} from "react-router-dom";
import axios from 'axios'
import { useForm } from "react-hook-form";


const UpdatePlant = () => {
   
    const getUrl = "http://localhost:8091/search/type/"
    const {commonName} = useParams();
    
    const [plantData, setPlantData] = useState([]) 
    const history = useHistory({forceRefresh:true})

    useEffect(() => {
       fetch(`${getUrl}${commonName}`).then(res => res.json()).then(setPlantData) 
    }, [])


    function apiCall(method, url, data) {
        return new Promise((resolve, reject) =>
        axios({
            method,
            url,
            params: { origin: "*" },
            data })
        .then(res => { resolve(res.data) })
        .catch((err) => {
            if (err.response) reject(err.response.data);
            else if (err.request) reject(err);
            else reject(err)}))
    }

    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = plantInput => { 

        const putReqObject  =  {
                                "id": plantData.id,
                                "common_name": plantData.common_name,
                                "scientific_name": plantInput.plantSciName,
                                "family_common_name": plantInput.plantFamName,
                                "genus_id": plantData.genus_id,
                                "image_url": plantData.image_url,
                                "genus": plantData.genus,
                                "family": plantData.family
                            }


        apiCall('PUT', 'http://localhost:8091/plant/' + plantData.id, putReqObject)

        history.push('/shlf')

    }


    return (

                <div style={{textAlign: 'center', margin: '10px'}}>
                    <Card style={{border: '1px solid black', width: '25rem', padding: '10px', margin: '0 auto'}}>
                    <h1>{plantData.common_name}</h1>
                    <Card.Img variant="top" src={plantData.image_url} style={{ margin: '0 auto', width: '250px' }}/>
                    <Card.Body>

                    
                        <form onSubmit={handleSubmit(onSubmit)}>

                        <label for="plantSciName">Scientific Name</label><br></br>
                        <input name="plantSciName" defaultValue={plantData.scientific_name} ref={register({ required: true, maxLength: 40 })}/><br></br>
                        <label for="plantFamName">Family Name</label><br></br>
                        <input name="plantFamName" defaultValue={plantData.family_common_name} ref={register({ required: true, maxLength: 40 })}/><br></br><br></br>
                        
                        {errors.exampleRequired && <p>This field is required</p>}
                        
                            <Button type="submit" variant="warning">Update</Button>
                       
                        </form>

                    </Card.Body>
                    </Card> 
                </div>
             )
}


export default UpdatePlant;
