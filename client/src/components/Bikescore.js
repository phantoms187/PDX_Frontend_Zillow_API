import React from 'react';
import './Bikescore.css';


function addDescription(score) {
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
function BikeScore({score, description}){
  let description_sec = addDescription(score);
  return ( 
    <section className="bikescore_data">
      <div className="bikescore_score box">
        <h5>bikescore</h5>
        <h1>{score}</h1>
      </div>
      <div className="bikescore_desc_all box">
        <div className="bikescore_desc box">
          <h3>{description}</h3>
        </div>
        <div className="bikescore_desc_sec box">
          {description_sec}
        </div>
      </div>
    </section>);
}

export default BikeScore;

