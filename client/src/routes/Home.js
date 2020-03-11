import React, { Component } from "react";
import { Link } from  "react-router-dom";
import WeatherIcon from '../components/WeatherIcon';

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
      realestateObj:''
    };
    console.log("home:" + this.state.street);
  }
  
  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
        this.setState({    
            street: this.props.street,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            weather: this.props.weather,
            icon: this.props.icon
        });
    }
  }
  
   componentDidMount(){
    this.callApi()
      .then(res => this.setState({realestateObj: res}))
      .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/zillow');
    const body = await response.json();
    console.log(body);
    return body;
  }
  

  render (){
    return (
    <div className="my-app">
      
      { this.state.icon ? 
        (
          <WeatherIcon weatherIcon={this.state.icon} weatherForecast={this.state.weather} />
        ) :
           (<div></div>)
      }

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
