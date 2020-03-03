import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import AboutWS from "./routes/AboutWS";
import Home from "./routes/Home";
// import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      {/* <Navigation /> */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/walkscore" exact={true} component={AboutWS} />
    </HashRouter>
  );
}

export default App;