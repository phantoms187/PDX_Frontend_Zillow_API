import React, { Component } from "react";

import WeatherIcon from '../components/WeatherIcon';
import Address from '../components/Address';
import AboutWS from "./AboutWS";
import AboutBS from "./AboutBS";
import Card from 'react-bootstrap/Card';
import './Home.css';

import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


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
      timezone:this.props.timezone ? this.props.timezone : "",
      walkscoreObj: this.props.walkscoreObj ? this.props.walkscoreObj : ""
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
            timezone:this.props.timezone,
            walkscoreObj: this.props.walkscoreObj
        });
    }
  }

  render (){
    const walkScoreReady = this.state.walkscoreObj;
    const icon = this.state.icon;
    const options = {
      title: {
        text: "Position"
      },
      data: [{
                type: "column",
                dataPoints: [
                    { label: "latitude",  y: this.state.latitude },
                    { label: "longitude", y: this.state.longitude }
                ]
       }]
   }

    return (

      <div className="my-app">
        { icon ?
          (
            <div className="box">
              <div className="weather">
              <span><WeatherIcon temperature={this.state.temperature} city={this.state.city} weatherIcon={this.state.icon} weatherForecast={this.state.weather} /></span>
              </div>
              <div className="address">
              <span><Address {...this.state} /></span>
              </div>
              <div className="chart">
              <CanvasJSChart options = {options} />
              </div>
              { walkScoreReady ?
                (
                    <div className="walkscore">
                    <AboutWS walkscoreObj={this.state.walkscoreObj}/>
                    </div>
                ) :
                (
                    <div className="walkscore">
                    <p>Loading...</p>
                    </div>
                ) }
                { walkScoreReady ?
                  (
                      <div className="bikescore">
                        <AboutBS bikescoreObj={this.state.walkscoreObj.bike}/>
                      </div>
                  ) :
                  (
                      <div className="bikescore">
                      <p>Loading...</p>
                      </div>
                  ) }
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
