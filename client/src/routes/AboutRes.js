import React, { Component } from 'react';
//import axios from 'axios';
import Restaurant from '../components/Restaurant';

class AboutRes extends Component {
  constructor(props){
    super(props);
    this.state = {
      neighborObj: this.props.neighborObj ? this.props.neighborObj : ""
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
      this.setState({
        neighborObj: this.props.neighborObj
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
      {this.state.neighborObj ?
        (
          this.state.neighborObj.map(restaurant => {
            return (
              <Restaurant 
                name={this.state.restaurant.name}
              />
            );
          })
        ) : (
          <div className="loader">
            <span className="loader_text"> </span>
          </div>
        )}
    </section>
    );

  }

}

export default AboutRes;
