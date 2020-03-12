import React, { Component } from 'react';
//import axios from 'axios';
import Bikescore from '../components/Bikescore';

class AboutBS extends Component {
  constructor(props){
    super(props);
    this.state = {
      bikescoreObj: this.props.bikescoreObj ? this.props.bikescoreObj: ""
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
        this.setState({
          bikescoreObj: this.props.bikescoreObj
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
  //   axios.post('/bikescore', place)
  //   .then(response => {
  //     this.setState({
  //       bikescoreObj: response.data
  //     });
  //   })
  //   .catch((error) => {
  //       console.log(error);
  //   });
  // }

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
