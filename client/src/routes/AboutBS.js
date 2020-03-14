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
        { this.props.bikescoreObj.bike ?
          (
            <div>
            <Bikescore score={this.props.bikescoreObj.bike.score} description={this.props.bikescoreObj.bike.description} />
            </div>
          ) :
          (
            <div>
              <p>Loading...</p>
            </div>
          )
        }
        </div>
      </section>
    );
  }
}

export default AboutBS;
