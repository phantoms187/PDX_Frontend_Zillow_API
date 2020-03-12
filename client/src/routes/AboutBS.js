import React, { Component } from 'react';
import axios from 'axios';
import Bikescore from '../components/Bikescore';

class AboutBS extends Component {
  constructor(props){
    super(props);
    this.state = {
      street: this.props.street ? this.props.street: "",
      city: this.props.city ? this.props.city : "",
      state: this.props.state ? this.props.state : "",
      zip: this.props.zip,
      weather: this.props.weather ? this.props.weather : "",
      icon: this.props.icon ? this.props.icon : "",
      bikescoreObj:''
    };
  }
  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
        this.setState({    
            street: this.props.street,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            weather: this.props.weather,
            icon: this.props.icon
        });
    }
  }

  componentDidMount(){
    const place = {
      street: !(this.state.street) ? this.state.street : "",
      city: this.state.city,
      state: this.state.state,
      zip: !(this.state.zip) ? this.state.zip : "",
    };

    axios.post('/bikescore', place)
    .then(response => {
      this.setState({
        bikescoreObj: response.data
      });
    })
    .catch((error) => {
        console.log(error);
    });
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
