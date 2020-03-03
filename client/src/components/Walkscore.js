import React from 'react';


function addDescription(score) {
  console.log(score);
  if (Number(score) <= 24)
    return "Almost all errands require a car.";
  else if ( Number(score) <= 49)
    return "Most errands require a car.";
  else
    return "not yet";
}
function Walkscore({score, description}){
  let description_sec = addDescription(score);
  return ( 
    <div className="walkscore_data">
      <h1 className="walkscore_score">{score}</h1>
      <h1 className="walkscore_desc">{description}</h1>
      <h1 className="walkscore_desc_sec">{description_sec}</h1>
    </div>);
}

export default Walkscore;