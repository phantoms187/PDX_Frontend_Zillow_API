import React from 'react';
import './Walkscore.css';


function addDescription(score) {
  console.log(score);
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
function Walkscore({score, description}){
  let description_sec = addDescription(score);
  return ( 
    <section className="walkscore_data">
      <div className="walkscore_score box">
        <h5>walkscore</h5>
        <h1>44</h1>
      </div>
      <div className="walkscore_desc_all box">
        <div className="walkscore_desc box">
          <h3>{description}</h3>
        </div>
        <div className="walkscore_desc_sec box">
          {description_sec}
        </div>
      </div>
    </section>);
}

export default Walkscore;

