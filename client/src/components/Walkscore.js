import React from 'react';
import './Walkscore.css';
import Card from 'react-bootstrap/Card'

class Walkscore extends React.Component {
  //Return additional description of walkscore
  addDescription(score) {
    if (Number(score) <= 24)
      return "Almost all errands require a car.";
    else if ( Number(score) <= 49)
      return "Most errands require a car.";
    else if ( Number(score) <= 69)
      return "Some errands can be accomplished on foot.";
    else if ( Number(score) <= 89)
      return "Most errands can be accomplished on foot.";
    else if ( Number(score) <= 100)
      return "Daily errands do not require a car.";
    else
      return "Not yet decided.";
  }
  //Display score, discription and detail
  render() {
    let description_sec = this.addDescription(this.props.score);
    return (
      <Card className="my-address">
      <Card.Header className="address-header">Walk Score</Card.Header>
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

export default Walkscore;
