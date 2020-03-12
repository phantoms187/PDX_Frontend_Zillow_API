import React, { Component } from "react";
import { Link } from  "react-router-dom";

import WeatherIcon from '../components/WeatherIcon';
import Address from '../components/Address';


import './Home.css';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      street: this.props.street,
      city: this.props.city ? this.props.city : "",
      state: this.props.state ? this.props.state : "",
      zip: this.props.zip,
      weather: this.props.weather ? this.props.weather : "",
      icon: this.props.icon ? this.props.icon : "",
      temperature: this.props.temperature ? this.props.temperature : "",
      latitude: this.props.latitude ? this.props.latitude : "",
      longitude: this.props.longitude ? this.props.longitude : "",
      timezone:this.props.timezone ? this.props.timezone : ""
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
        this.setState({
            street: this.props.street,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            weather: this.props.weather,
            icon: this.props.icon,
            temperature: this.props.temperature,
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            timezone:this.props.timezone
        });
    }
  }

  render (){
    return (
    <div className="my-app">
      <div className="box">

      { this.state.icon ?
        (
          <div className="weather">
          <WeatherIcon temperature={this.state.temperature} city={this.state.city} weatherIcon={this.state.icon} weatherForecast={this.state.weather} />
          </div>
        ) :
        ( <div className="weather"></div>)
      }

      { this.state.street ?
        (
          <div className="address">
          <Address {...this.state} />
          </div>
        ) :
        ( <div className="address"></div> )
      }
        <div className="walkscore">
          <Link to="/walkscore">Walk Score</Link>
        </div>
        <div className="bikescore">
          <Link to="/bikescore">Bike Score</Link>
        </div>
      </div>
    </div>
  );
 }
}

export default Home;
