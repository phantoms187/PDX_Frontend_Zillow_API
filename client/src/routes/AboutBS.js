import React, { Component } from 'react';
import Bikescore from '../components/Bikescore';

class AboutBS extends Component {
  constructor(props){
    super(props);
    this.state = {
      bikescoreObj:'',
      completed: 0,
    }
  }
  componentDidMount(){
    this.callApi()
      .then(res => this.setState({bikescoreObj: res}))
      .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/bikescore');
    const body = await response.json();
    console.log(body);
    return body;
  }
  render(){

    return (
      <section className="container">
        {this.state.bikescoreObj ?
          (
            <Bikescore score={this.state.bikescoreObj.score} description={this.state.bikescoreObj.description} />
          ) : (
            <div className="loader">
              <span className="loader_text"> Loading...</span>
            </div>
          )}
      </section>
    );

  }

}

export default AboutBS;
