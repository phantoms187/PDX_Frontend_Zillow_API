import React, { Component } from 'react';
import Skycons from 'react-skycons';
import Card from 'react-bootstrap/Card'
import './WeatherIcon.css';


class WeatherIcon extends Component{

  constructor(props){
    super(props);
    this.state = {
      weatherIcon: this.props.weatherIcon,
      weatherForecast: this.props.weatherForecast,
    };
  }



  // <div className = "row my-skycon">
  //     <h6 className="weather-header">Weather:</h6>
  // {this.state.weatherIcon}
  //     <h3>{this.state.weatherForecast}</h3>
  // </div>

render() {
  return (
    <Card className="my-card">
    <Card.Header >Current Weather</Card.Header>
    <Skycons className="marginTop10px" color='black' icon= {this.state.weatherIcon} autoplay={true}/>
      <Card.Body>
        <Card.Text>
          {this.state.weatherForecast}
        </Card.Text>
      </Card.Body>
    </Card>
  )}
}

export default WeatherIcon;
