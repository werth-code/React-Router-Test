import React,{useState} from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Contact() {

  const [readMore, setReadMore] = useState(false);

  const extraContent=<div>
      <p className="extra-content">
        I love to travel, garden and eat well! Check out my Shlf to see my plants.
      </p><br></br>
      <Link to={`/shlf`}>
        <Button name="view" variant="success">View Shlf</Button>
      </Link>


  </div>

  const linkName=readMore?'Read Less << ':'Read More >> '
  
  return (
    <div className="App">
      <h2>Matthew Werth</h2>
      <h6>Member Since 2021</h6>
            <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1613984431576-0beeedf617b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Travels</h3>
            <p>I Love To Travel!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>I Love To Garden!</h3>
            <p>Gardening Is A Favorite Summer Activity.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Fresh Foods</h3>
            <p>Cooking With Fresh Foods</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <a  className="read-more-link" onClick={ () => { setReadMore(!readMore)} }><h5><href>{linkName}</href></h5></a>
      {readMore && extraContent}
    </div>
  );
}

export default Contact;