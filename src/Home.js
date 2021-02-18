import React, { Component } from "react";
import SearchComponent from "./components/SearchComponent";

 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Search For Your Favorite Plants</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh.
        </p>
 
        <SearchComponent />
      </div>
    );
  }
}
 
export default Home;