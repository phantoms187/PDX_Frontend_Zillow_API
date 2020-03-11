import React from 'react';
import './Bikescore.css';
import Collapsible from 'react-collapsible';

class BikeScore extends React.Component {
  constructor(props) {
    super(props);
  }

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
  render() {
    let description_sec = this.addDescription(this.props.score);
    return (
    <div>
      <section className="bikescore_data">
        <div className="bikescore_score">
          bikescore
          <h3>{this.props.score}</h3>
        </div>
        <div className="bikescore_desc_all">
          <div className="bikescore_desc">
            <h3>{this.props.description}</h3>
          </div>
          <div className="bikescore_desc_sec">
            <br></br>{description_sec}
          </div>
        </div>
      </section>
      <Collapsible className="bikescore_detail" trigger="How Bike Score Works">
        <p><h4>90–100: </h4>Biker’s Paradise<br></br>
        Daily errands can be accomplished on a bike</p>
        <p><h4>70–89: </h4>Very Bikeable<br></br>
        Biking is convenient for most trips</p>
        <p><h4>50–69: </h4>Bikeable<br></br>
        Some bike infrastructure</p>
        <p><h4>0–49: </h4>Somewhat Bikeable<br></br>
        Minimal bike infrastructure</p>
      </Collapsible>
      </div>
    );
  }

};

export default BikeScore;



