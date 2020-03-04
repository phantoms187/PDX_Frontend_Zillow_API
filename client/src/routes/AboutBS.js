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
    fetch('/bikescore')
      .then(res => res.json())
      .then(bikescoreObj => this.setState({bikescoreObj}, () => console.log('Bikescore fetched..',
      bikescoreObj)));
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
