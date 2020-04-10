import React from 'react';
import './Bikescore.css';
import Card from 'react-bootstrap/Card'

class BikeScore extends React.Component {

  //Return additional description of bikescore
  addDescription(score) {
    if ( Number(score) <= 49)
      return "Minimal bike infrastructure.";
    else if ( Number(score) <= 69)
      return "Some bike infrastructure.";
    else if ( Number(score) <= 89)
      return "Biking is convenient for most trips.";
    else if ( Number(score) <= 100)
      return "Daily errands can be accomplished on a bike.";
    else
      return "Not yet decided.";
  }
  //Display score, discription and detail
  render() {
    let description_sec = this.addDescription(this.props.score);
    return (
      <Card className="my-address">
      <Card.Header className="address-header">Bike Score</Card.Header>
        <Card.Body>
          <Card.Text>
            <div>
              <h2>{this.props.score}</h2>
              <h5>{this.props.description}</h5>
              <h5>{description_sec}</h5>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

};

export default BikeScore;
