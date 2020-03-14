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
      { this.props.walkscoreObj ?
        (
            <div>
              <Walkscore score={this.props.walkscoreObj.walkscore} description={this.props.walkscoreObj.description} />
            </div>
        ) :
        (
            <div>
            <p>Loading...</p>
            </div>
        )
      }
      </section>
    );
  }
}

export default AboutWS;
