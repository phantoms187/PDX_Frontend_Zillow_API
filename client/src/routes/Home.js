import React, { Component }  from "react";
import { Link } from  "react-router-dom"

class Home extends Component {

  constructor() {
    super();
    this.state = {
      realestateObj:''
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
    <div>
      <h1>testtest</h1>


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
