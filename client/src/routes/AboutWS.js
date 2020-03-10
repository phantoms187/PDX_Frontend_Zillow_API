import React, { Component } from 'react';
import Walkscore from '../components/Walkscore';

class AboutWS extends Component {
  constructor(props){
    super(props);
    this.state = {
      walkscoreObj:'',
      completed: 0,
    }
  }
  componentDidMount(){
    this.callApi()
      .then(res => this.setState({walkscoreObj: res}))
      .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/walkscore');
    const body = await response.json();
    return body;
  }

  render(){

    return (
      <section className="container">
        {this.state.walkscoreObj ?
          (
            <Walkscore score={this.state.walkscoreObj.walkscore} description={this.state.walkscoreObj.description} />
          ) : (
            <div className="loader">
              <span className="loader_text"> Loading...</span>
            </div>
          )}
      </section>
    );

  }

}

export default AboutWS;
