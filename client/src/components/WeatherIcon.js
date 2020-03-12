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
      city: this.props.city,
      temperature: this.props.temperature
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){

        this.setState({
            weatherIcon: this.props.weatherIcon,
            weatherForecast: this.props.weatherForecast,
            city: this.props.city,
            temperature: this.props.temperature
        });
    }
}

render() {
  return (
    <Card className="my-card">
    <Card.Header className="card-header"><div>Current Weather:</div> {this.state.city} </Card.Header>
    <Skycons className="marginTop10px" color='black' icon= {this.state.weatherIcon} autoplay={true}/>
      <Card.Body>
        <Card.Text>
          <div>{(this.state.weatherForecast)}</div>
          <div>{Math.trunc(this.state.temperature)}&#8457;</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )}
}

export default WeatherIcon;
