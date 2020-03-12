import React, { Component } from 'react';
import { HashRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



// import AboutWS from "./routes/AboutWS";
// import AboutBS from "./routes/AboutBS";
import Home from "./routes/Home";

import Navigation from "./components/Navigation";

class App extends Component {
   constructor() {
    super();
    this.state = {
      street: '',
      city: '',
      state: '',
      zip: '',
      weather: '',
      icon: '',
      temperature: '',
      latitude: '',
      longitude: '',
      timezone: ''

    };
  }

   getLocation = (locationData) => {
    if(locationData) {
      this.setState({
        street: locationData.street,
        city: locationData.city,
        state: locationData.state,
        zip: locationData.zip,
        weather: locationData.weather,
        icon: locationData.icon,
        temperature: locationData.temperature,
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        timezone:locationData.timezone,
        walkscoreObj: locationData.walkscoreObj
      });
    }
  }
  // <Route path="/walkscore" exact={true}> <AboutWS street={this.state.street} zip={this.state.zip} icon={this.state.icon} city={this.state.city} state={this.state.state} weather={this.state.weather}/></Route>
  //<Route path="/bikescore" exact={true}> <AboutBS street={this.state.street} zip={this.state.zip} icon={this.state.icon} city={this.state.city} state={this.state.state} weather={this.state.weather}/></Route>

  render (){
    return (
      <HashRouter>
        <Navigation  giveLocationData={this.getLocation}/>
        <Route path="/" exact={true}> <Home className="container home" {...this.state}/></Route>

      </HashRouter>
    );
  }
}

export default App;
