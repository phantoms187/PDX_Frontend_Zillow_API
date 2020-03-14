import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../routes/Search";


import './Navigation.css';
//Class for the top navbar
class Navigation extends Component {
//Set all state to "" so there won't be any location saved when loaded
  constructor(props){
    super(props);
    this.state = {
      search: false,
      street: "",
      city: "",
      state: "",
      zip: ""
    };
  }
//FUnction to toggle the search bar
  toggleSearch = e => {
    this.setState({
      search: !this.state.search
    });
  }
//Location data bubbled up from search component
   giveLocationData = (locationData) => {
     //Set state from needed address info from search component
    if(locationData){
      this.setState({
        street: locationData.street,
        city: locationData.city,
        state: locationData.state,
        zip: locationData.zip
      });
      //Send all the data from the search component to the main App component
      let locData = {
        street: locationData.street,
        city: locationData.city,
        state: locationData.state,
        zip: locationData.zip,
        weather: locationData.weather,
        icon: locationData.icon,
        temperature: locationData.temperature,
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        timezone:locationData.timezone,
        walkscoreObj: locationData.walkscoreObj
      };
    this.props.giveLocationData(locData);
    }
  }

  render() {
    return (
      <div className="my-nav">
        <nav className="navbar navbar-expand-md my-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link my-nav-link">Home</Link>
              </li>
              <li className="nav-item active">
                  <div onClick={this.toggleSearch} className="nav-link my-nav-link">Search</div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                {this.state.street ?
                  (<li className="address-requested">
                    Requested Address:
                    <span className="capitalize"> {"\t " + this.state.street + " "}</span>
                    <span className="capitalize"> {this.state.city + ", "}</span>
                    <span className="uppercase"> {this.state.state + " "}</span>
                    {this.state.zip}
                    </li>
                  ) : (
                    <li></li>
                  )}
            </ul>
        </nav>
        { this.state.search ? (
          <div className="row justify-content-start">
            <div className="col-sm-12 col-md-10 col-lg-6 mb-2">
              <Search toggleSearch={this.toggleSearch} giveLocationData={this.giveLocationData}/>
            </div>
          </div>
        ) :
        (<div></div>)}
      </div>
    )}
}

export default Navigation;
