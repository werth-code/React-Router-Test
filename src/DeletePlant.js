import { Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from 'axios'


const DeletePlant = () => {


   
    const {userId, plantId} = useParams( "/users/:userId/delete/:plantId");
    console.log(userId, plantId)

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
                    <h1>Are You Sure?</h1>
                <Card.Body>
                     
                        <form action={`http://localhost:3000/users/${'shlf'}`} onSubmit={console.log(`Deleted Plant ID#${plantId}`)}>
                            <Button onClick={apiCall('DELETE', 'http://localhost:8091/plant/' + parseInt(plantId))} type="submit" variant="danger">Verify Delete</Button>
                        </form>

                </Card.Body>
                </Card> 
            </div>
    )
}
export default DeletePlant;

