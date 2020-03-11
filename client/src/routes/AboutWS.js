import React, { Component } from 'react';
import Walkscore from '../components/Walkscore';

class AboutWS extends Component {
  constructor(props){
    super(props);
    this.state = {
      street: this.props.street,
      city: this.props.city ? this.props.city : "",
      state: this.props.state ? this.props.state : "",
      zip: this.props.zip,
      weather: this.props.weather ? this.props.weather : "",
      icon: this.props.icon ? this.props.icon : "",
      walkscoreObj:'',
      completed: 0,
    }
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
    this.callApi()
      .then(res => this.setState({walkscoreObj: res}))
      .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/walkscore');
    const body = await response.json();
    return body;
  }

  render(){

    return (
      <section className="container">
        
        {this.state.walkscoreObj ?
          (
            <div>
            <Walkscore score={this.state.walkscoreObj.walkscore} description={this.state.walkscoreObj.description} />
            </div>
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
