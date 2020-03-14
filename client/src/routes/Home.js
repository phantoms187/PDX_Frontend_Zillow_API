import React, { Component } from "react";
//Imports for each component
import WeatherIcon from '../components/WeatherIcon';
import Address from '../components/Address';
import AboutRes from './AboutRes';
import AboutWS from "./AboutWS";
import AboutBS from "./AboutBS";
import Card from 'react-bootstrap/Card';
import './Home.css';
//Import for Canvas to make graph
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

//Class for Home component to hold and arrange all components
class Home extends Component {
  //Constructor to run at instance of new Home
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
      timezone:this.props.timezone ? this.props.timezone : "",
      walkscoreObj: this.props.walkscoreObj ? this.props.walkscoreObj : "",
      neighborObj: this.props.neighborObj ? this.props.neighborObj : ""
    };
  }
  //Update Component if props change
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
            timezone:this.props.timezone,
            walkscoreObj: this.props.walkscoreObj,
            neighborObj: this.props.neighborObj
        });
    }
  }

  render (){
    const walkScoreReady = this.props.walkscoreObj;
    const icon = this.props.icon;
    const options = {
      title: {
        text: "Position"
      },
      data: [{
                type: "column",
                dataPoints: [
                    { label: "latitude",  y: this.props.latitude },
                    { label: "longitude", y: this.props.longitude }
                ]
            }]
    }

    return (
      <div className="my-app">

        { icon ?
          (
            <div className="box">
              <div className="weather">
                <span><WeatherIcon temperature={this.props.temperature} city={this.props.city} weatherIcon={this.props.icon} weatherForecast={this.props.weather} /></span>
              </div>
              <div className="address">
                <span><Address {...this.props} /></span>
              </div>
              <div className="chart">
                <CanvasJSChart options = {options} />
              </div>
              <div className="walkscore">
                <AboutWS walkscoreObj={this.props.walkscoreObj}/>
              </div>
              <div className="bikescore">
                <AboutBS bikescoreObj={this.props.walkscoreObj}/>
              </div>
            </div>
          ) :
          (
            <div className="box-waiting">
            <div className="waiting">
              <Card>
              <Card.Header>Welcome!</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>Enter an address using the Search Option above <span className="uparrow">&#8679;</span></p>
                    <div className="ball-container">
                      <div className="ball"></div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            </div>
          )
        }
      </div>
  );
 }
}

export default Home;
