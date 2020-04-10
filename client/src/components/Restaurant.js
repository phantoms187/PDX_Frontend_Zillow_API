import React, { Component }  from 'react';
//import './Restaurant.css';
import Card from 'react-bootstrap/Card'

class Restaurant extends React.Component {

  render() {
    console.log(this.props.photo);
    return (

      <div>
        <Card className="my-address">
        <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
          </Card.Body>
        </Card>
        
      </div>
    );
  }
};

export default Restaurant;
