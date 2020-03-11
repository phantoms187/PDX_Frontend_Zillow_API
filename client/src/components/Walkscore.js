import React from 'react';
import './Walkscore.css';
import Collapsible from 'react-collapsible';

class Walkscore extends React.Component {
  constructor(props) {
    super(props);
  }

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
  render() {
    let description_sec = this.addDescription(this.props.score);
    return (
    <div>
      <section className="walkscore_data">
        <div className="walkscore_score">
          walkscore
          <h3>{this.props.score}</h3>
        </div>
        <div className="walkscore_desc_all">
          <div className="walkscore_desc">
            <h3>{this.props.description}</h3>
          </div>
          <div className="walkscore_desc_sec">
          <br></br>{description_sec}
          </div>
        </div>
      </section>
      <Collapsible className="walkscore_detail" trigger="How Walk Score Works">
        <p><h4>90–100: </h4>Walker’s Paradise<br></br>
           Daily errands do not require a car</p>
        <p><h4>70–89: </h4>Very Walkable<br></br>
        Most errands can be accomplished on foot</p>
        <p><h4>50–69: </h4>Somewhat Walkable<br></br>
        Some errands can be accomplished on foot</p>
        <p><h4>25–49: </h4>Car-Dependent<br></br>
        Most errands require a car</p>
        <p><h4>0–24: </h4>Car-Dependent<br></br>
        Almost all errands require a car</p>
      </Collapsible>
      </div>
    );
  }

};

export default Walkscore;

