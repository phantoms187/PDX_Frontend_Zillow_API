import React, { Component } from "react";
import { Link } from  "react-router-dom";
import WeatherIcon from '../components/WeatherIcon';


class Home extends Component {
  
  constructor() {
    super();
  }
  
  render (){
    return (
    <div>
      <WeatherIcon weatherIcon="SNOW" weatherForecast="Snow" /> 
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
