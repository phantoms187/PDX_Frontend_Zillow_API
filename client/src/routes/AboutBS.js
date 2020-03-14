import React, { Component } from 'react';
import Bikescore from '../components/Bikescore';

class AboutBS extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps){
  }

  render(){
    return (
      <section className="container">
        <div>
          <Bikescore score={this.props.bikescoreObj.score} description={this.props.bikescoreObj.description} />
        </div>
      </section>
    );
  }
}

export default AboutBS;
