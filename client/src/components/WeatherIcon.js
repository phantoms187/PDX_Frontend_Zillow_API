import React, { Component } from 'react';
import Skycons from 'react-skycons';
import './WeatherIcon.css';

class WeatherIcon extends Component{

  constructor(props){
    super(props);
    this.state = {
      weatherIcon: this.props.weatherIcon,
      weatherForecast: this.props.weatherForecast,
    };
  }

render() {
  return (
    <div className = "container my-skycon">
        <h6 className="weather-header">Current Weather:</h6>
        <Skycons color='black' icon={this.state.weatherIcon} autoplay={true}/>
        <h3>{this.state.weatherForecast}</h3>
    </div>
  )}
}

export default WeatherIcon;
