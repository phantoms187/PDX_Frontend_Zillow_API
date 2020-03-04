import React from "react";
import { Link } from  "react-router-dom"

function Home() {
  return (
  <div>
    <div>
      <Link to="/walkscore">Walk Score</Link>
    </div>
    <div>
      <Link to="/bikescore">Bike Score</Link>
    </div>
  </div>
  );
}

export default Home;
