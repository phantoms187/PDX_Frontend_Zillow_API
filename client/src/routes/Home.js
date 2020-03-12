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

      { true ?
        (
          <div className="weather">
          <WeatherIcon temperature="70.11" city="melbourne beach" weatherIcon="SNOW" weatherForecast="Snow" />
          </div>
        ) :
           (<div className="weather"></div>)
      }
        <div className="address">
          <Address timezone="Pacific" longitude="102.01" latitude="41.00" street="211 dogwood ave" city="melbourne beach" state="fl" zip="32951" />
        </div>
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
