import React, { Component } from 'react';
import Walkscore from '../components/Walkscore';

class AboutWS extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps){
  }

  // componentDidMount(){
  //   const place = {
  //     street: this.state.street,
  //     city: this.state.city,
  //     state: this.state.state,
  //     zip: this.state.zip
  //   };
  //
  //   axios.post('/walkscore', place)
  //   .then(response => {
  //     this.setState({
  //       walkscoreObj: response.data
  //     });
  //   })
  //   .catch((error) => {
  //       console.log(error);
  //   });
  // }

  //Walkscore page rendering
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
