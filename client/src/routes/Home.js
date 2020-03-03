import React from "react";
import AboutWS from "./AboutWS";
import { Link } from  "react-router-dom"

function Home() {
  return (
    <div>
      <Link to="/walkscore">Walk Score</Link>
    </div>
  );
}

export default Home;
