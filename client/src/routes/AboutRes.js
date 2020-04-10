import React, { Component } from 'react';
//import axios from 'axios';
import Restaurant from '../components/Restaurant';

class AboutRes extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps){
  }

  //restaurant page rendering
  render(){

    return (
      <section className="container">
        {this.props.neighborObj ?
          (
            this.props.neighborObj.map(restaurant => {
              console.log(restaurant.photo);
              return (
                <Restaurant 
                  name={restaurant.name}
                  image={restaurant.photo}
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
