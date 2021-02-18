import React, { Component } from "react";
import SearchComponent from "./components/SearchComponent";

 
class Home extends Component {
  render() {
    return (
      <div style={{textAlign: 'center' ,margin: '0 auto'}}>
        <h2 style={{margin: '0 auto'}}>Search For Your Favorite Plants</h2>
        <p style={{margin: '0 auto'}}>Search for your plant to add it to your shlf!
        </p>
 
        <SearchComponent />
      </div>
    );
  }
}
 
export default Home;