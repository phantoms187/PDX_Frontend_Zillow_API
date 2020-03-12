import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../routes/Search";


import './Navigation.css';

class Navigation extends Component {

  constructor(props){
    super(props);
    this.state = {
      search: false
    };
  }

  toggleSearch = e => {
    this.setState({
      search: !this.state.search
    });
  }

   giveLocationData = (locationData) => {
    if(locationData){
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
              <li className="nav-item active">
                  <Link to={'/'} className="nav-link my-nav-link">Home</Link>
              </li>
              <li>
                  <div onClick={this.toggleSearch} className="nav-link my-nav-link">Search</div>
              </li>
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
