import React, { Component } from 'react';
import Skycons from 'react-skycons';


import './WeatherIcon.css';

class WeatherIcon extends Component{

  constructor(props){
    super(props);
    this.state = {
      weatherIcon:'',
      weatherForecast: '',
      isLoading: false
    }
  }

  // componentDidMount(){
  //
  //   this.setState({ isLoading: true });
  //
  //   fetch('/weather')
  //     .then(res => res.json())
  //     .then(weatherRequested => this.setState({ weatherIcon: (weatherRequested.currently.icon).toUpperCase().replace(/-/g,'_'), weatherForecast: weatherRequested.currently.summary}))
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

render() {
  return (
    <div className = "container my-skycon">
      <Skycons color='black' icon="SNOW" autoplay={true}/>
    </div>
  )}
}

export default WeatherIcon;
