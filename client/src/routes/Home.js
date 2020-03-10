import React, { Component } from "react";
import { Link } from  "react-router-dom";
import WeatherIcon from '../components/WeatherIcon';


class Home extends Component {

  // constructor() {
  //   super();
  // }
  // { this.props.icon ?
  //   (<WeatherIcon weatherIcon={this.props.icon} weatherForecast={this.props.weather} /> ) :
  //   (<div></div>)
  // }



  render (){
    return (
    <div>
      <h1>{this.props.city}</h1>
      <h1>{this.props.state}</h1>

      <WeatherIcon weatherIcon={this.props.icon} weatherForecast={this.props.weather} />
      <div>
        <Link to="/walkscore">Walk Score</Link>
      </div>
      <div>
        <Link to="/bikescore">Bike Score</Link>
      </div>
    </div>
    );
  }
}

export default Home;
