import React from 'react';
import { HashRouter, Route} from "react-router-dom";


import AboutWS from "./routes/AboutWS";
import AboutBS from "./routes/AboutBS";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App() {
  return (

    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/walkscore" exact={true} component={AboutWS} />
      <Route path="/bikescore" exact={true} component={AboutBS} />
    </HashRouter>
  );
}

export default App;
