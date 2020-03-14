import React, { Component } from 'react';
import Walkscore from '../components/Walkscore';

class AboutWS extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps){
  }

  render(){
    return (
      <section className="container">
        <div>
          <Walkscore score={this.props.walkscoreObj.walkscore} description={this.props.walkscoreObj.description} />
        </div>
      </section>
    );
  }
}

export default AboutWS;
