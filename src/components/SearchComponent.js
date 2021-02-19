import React from 'react'
import PageController from '../PageController'
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
export default class SearchComponent extends React.Component {

  
  constructor(props) {
    super(props);

        this.state = {
        searchQuery: "fern",
        plant: []
    }
  }

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

    const plantCard = this.state.plant.map(plant => {

        if(plant.image_url === null) plant.image_url ="https://www.gardeningknowhow.com/wp-content/uploads/2013/12/leaf-curl.jpg"

            return <div key={plant.common_name} style={{textAlign: 'center', margin: '10px'}}>
                  
                  <Card style={{border: '1px solid black', width: '25rem', padding: '20px', margin: '0 auto'}}>
                    <Card.Img variant="top" src={plant.image_url} style={{ margin: '0 auto', width: '250px' }}/>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bold' }}>{plant.common_name}</Card.Title>
                        <Card.Text>
                        <p>{plant.scientific_name}</p>
                        <p>{plant.family_common_name}</p>
                        </Card.Text>
                        <Link to={`plants/${plant.common_name}`}> 
                        <form method="get" action=""> 
                           <Button type="submit" name="select" variant="success">Select</Button>
                       </form>
                       </Link>
                    </Card.Body>
                    </Card> 
                    </div>
                
    });

            return  (
                <div>
                  <input type="text" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)} style={{ margin: '10px' }}/>
                  {/* <button onClick={this.handleButtonClicked.bind(this)}> */}
                    <Button variant="success" style={{ }}>Search</Button>
                  {plantCard}
                </div>
              );
            }
}

//http://localhost:8090/search/type/ + common_name
