import React from 'react';
import { HashRouter, Route} from "react-router-dom";


import AboutWS from "./routes/AboutWS";
import AboutBS from "./routes/AboutBS";
import Home from "./routes/Home";
import Search from "./routes/Search";

import Navigation from "./components/Navigation";
import WeatherIcon from "./components/WeatherIcon";

function App() {
  return (

    <HashRouter>
      <Navigation />
      <WeatherIcon />
      <Route path="/" exact={true} component={Home} />
      <Route path="/search" exact={true} component={Search} />
      <Route path="/walkscore" exact={true} component={AboutWS} />
      <Route path="/bikescore" exact={true} component={AboutBS} />
    </HashRouter>
  );
}

export default App;
