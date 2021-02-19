import React from 'react'
import PageController from '../PageController'
import Post from '../Post'
import { Card, Button } from 'react-bootstrap';
import { Route, Link } from "react-router-dom";
import axios from 'axios'

export default class SearchComponent extends React.Component {

  
  constructor(props) {
    super(props);

        this.state = {
        searchQuery: "fern",
        plant: []
    }
  }


  // requestData(formData) {
  //   return axios({
  //     method: "post",
  //     url: "http://localhost:8090/plant",
  //     data: formData,
  //     config: {
  //       headers: {
  //         Accept: "application/json",
  //         'Content-Type': "application/json"
  //       }
  //     }
  //   })
  // }

  //   axios.post(
  //       "http://localhost:8090/plant",
  //         {
  //         "id": plant.id,
  //         "common_name": plant.common_name,
  //         "scientific_name": plant.scientific_name,
  //         "family_common_name": plant.family_common_name,
  //         "genus_id": plant.genus_id,
  //         "image_url": plant.image_url,
  //         "genus": plant.genus,
  //         "family": plant.family
  //       }
  //     )
  //     .then(response => {
  //       this.resp = response;
  //     })
  //     .catch(e => {
  //       console.error(e);
  // })}>


  handleInputChanged(event) { // on a change event we want to set the state to the value inside the form..the callback keeps it in sync!
      this.setState({ searchQuery: event.target.value }, () => this.componentDidMount())
  }

//   handleButtonClicked() {
//     let searchQuery = this.state.searchQuery;
//     window.location.href = ''
//   }

  componentDidMount() {  //lifecycle method...
        PageController.getAPI(this.state.searchQuery).then( (response) => {
            this.setState({plant: response.data})
        }).catch( (error) => console.log(error))
  }

  render() {














    

  
    const mapOfCards = {}

    const plantCard = this.state.plant.map(plant => {

        if(plant.image_url === null) plant.image_url ="https://www.gardeningknowhow.com/wp-content/uploads/2013/12/leaf-curl.jpg"

        mapOfCards[plant.common_name] =  {
            "id": plant.id,
            "common_name": plant.common_name,
            "scientific_name": plant.scientific_name,
            "family_common_name": plant.family_common_name,
            "genus_id": plant.genus_id,
            "image_url": plant.image_url,
            "genus": plant.genus,
            "family": plant.family
        }


            return <div style={{textAlign: 'center', margin: '10px'}}>


                  <Link to={`plants/${plant.common_name}`}> 
                  <Card key={plant.common_name} style={{border: '1px solid black', width: '25rem', padding: '20px', margin: '0 auto'}}>
                    <Card.Img variant="top" src={plant.image_url} style={{ margin: '0 auto', width: '250px' }}/>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bold' }}>{plant.common_name}</Card.Title>
                        <Card.Text>
                        <p>{plant.scientific_name}</p>
                        <p>{plant.family_common_name}</p>
                        </Card.Text>
                        <form method="get" action=""> 
                           <Button type="submit" name="select" variant="primary"><Route path={plant.common_name} component={Post}/>Select</Button>
                       </form>
                    </Card.Body>
                    </Card> 
                        </Link>
                    </div>
                
    });

    return  (
      <div>
        <input type="text" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)} style={{ margin: '10px' }}/>
        {/* <button onClick={this.handleButtonClicked.bind(this)}> */}
        <Button style={{ }} >
          Search
        </Button>
       {plantCard}
      </div>
    );
  }
}

//http://localhost:8090/search/type/ + common_name
