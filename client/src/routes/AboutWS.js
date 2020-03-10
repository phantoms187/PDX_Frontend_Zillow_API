import React, { Component } from 'react';
import Walkscore from '../components/Walkscore';
// import Walkscore from '../components/Walkscore';

class AboutWS extends Component {
  constructor(props){
    super(props);
    this.state = {
      walkscoreObj:'',
      completed: 0,
    }
  }
  componentDidMount(){
    fetch('/walkscore')
      .then(res => res.json())
      .then(walkscoreObj => this.setState({walkscoreObj}, () => console.log('Walksocre fetched..',
      walkscoreObj)));
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
