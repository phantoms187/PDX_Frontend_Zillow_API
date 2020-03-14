import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import './Address.css';


class Address extends Component{
//Set state according to initial props. Set timezone to usable format
  constructor(props){
    super(props);
    var timezoneFormatted = "";
    if((this.props.timezone).includes("New_York"))
      timezoneFormatted = "Eastern";
    else if((this.props.timezone).includes("Los_Angeles"))
      timezoneFormatted = "Pacific";
    else if((this.props.timezone).includes("Denver"))
      timezoneFormatted = "Mountain";
    else if((this.props.timezone).includes("Chicago"))
      timezoneFormatted = "Central";
    this.state = {
      street: this.props.street,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      timezone: timezoneFormatted === "" ? this.props.timezone : timezoneFormatted
    };
  }
//If props change then set new state
  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
      var timezoneFormatted = "";
      if((this.props.timezone).includes("New_York"))
        timezoneFormatted = "Eastern";
      else if((this.props.timezone).includes("Los_Angeles"))
        timezoneFormatted = "Pacific";
      else if((this.props.timezone).includes("Denver"))
        timezoneFormatted = "Mountain";
      else if((this.props.timezone).includes("Chicago"))
        timezoneFormatted = "Central";

      this.setState({
        street: this.props.street,
        city: this.props.city,
        state: this.props.state,
        zip: this.props.zip,
        latitude: this.props.latitude,
        longitude: this.props.longitude,
        timezone:timezoneFormatted === "" ? this.props.timezone : timezoneFormatted
      });
    }
}

render() {
  return (
    <Card className="my-address">
    <Card.Header className="address-header">Location: </Card.Header>
      <Card.Body>
        <Card.Text>
          <div>
          //Use only positive number for lat/long and adjust direction letter appropriately
          {Math.abs((this.state.latitude).toFixed(3))}&#176;
          { (this.state.latitude) >=0 ? "N,   " : "S,   " }
          {Math.abs((this.state.longitude).toFixed(3))}&#176;
          { (this.state.longitude) >=0 ? "E" : "W" }
          </div>
          <div>
            //Use css class to capitalize the time zone 
            <span className="capitalize">Timezone: {(this.state.timezone)}</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )}
}

export default Address;
