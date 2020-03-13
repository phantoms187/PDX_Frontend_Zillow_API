import React, { Component } from 'react';
//import axios from 'axios';
import Walkscore from '../components/Walkscore';

class AboutWS extends Component {
  constructor(props){
    super(props);
    this.state = {
      walkscoreObj: this.props.walkscoreObj ? this.props.walkscoreObj : ""
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
        this.setState({
            walkscoreObj: this.props.walkscoreObj
        });
    }
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
        <div>
          <Walkscore score={this.state.walkscoreObj.walkscore} description={this.state.walkscoreObj.description} />
        </div>
      </section>
    );

  }

}

export default AboutWS;
