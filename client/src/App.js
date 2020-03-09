import React, { Component } from 'react';
import { HashRouter, Route} from "react-router-dom";


import AboutWS from "./routes/AboutWS";
import AboutBS from "./routes/AboutBS";
import Home from "./routes/Home";
import Search from "./routes/Search";

import Navigation from "./components/Navigation";

class App extends Component {
   constructor() {
    super();
    this.state = {
      city: '',
      state: '',
      zip: ''
    };
  }
  
  getLocation = (locationData) => {
    this.setState({
      city: locationData.city,
      state: locationData.state,
      zip: locationData.zip
    });
    console.log("It's working");
  }
  
  render (){
    return (
  
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true}> <Home city={this.state.city}/></Route>
        <Route path="/search" exact={true}> <Search giveLocationData={this.getLocation()} /> </Route>
        <Route path="/walkscore" exact={true} component={AboutWS} />
        <Route path="/bikescore" exact={true} component={AboutBS} />
      </HashRouter>
    );
  }
}

export default App;
