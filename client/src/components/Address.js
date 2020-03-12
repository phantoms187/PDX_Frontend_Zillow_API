import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import './Address.css';


class Address extends Component{

  constructor(props){
    super(props);
    this.state = {
      street: this.props.street,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      timezone:this.props.timezone
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
        this.setState({
          street: this.props.street,
          city: this.props.city,
          state: this.props.state,
          zip: this.props.zip,
          latitude: this.props.latitude,
          longitude: this.props.longitude,
          timezone:this.props.timezone
        });
    }
}

render() {
  return (
    <Card className="my-address">
    <Card.Header className="address-header">Requested Address: </Card.Header>
      <Card.Body>
        <Card.Text>
          <div><span className="capitalize">{(this.state.street)}</span></div>
          <div><span className="capitalize">{(this.state.city)}</span>, <span className="uppercase">{(this.state.state)}</span> {(this.state.zip)}</div>
          <div>
          {(this.state.latitude)}&#176;
          { (this.state.latitude) >=0 ? "N,   " : "S,   " }  
          {(this.state.longitude)}&#176;
          { (this.state.longitude) >=0 ? "E" : "W" }
          </div>
          <div><span className="capitalize">{(this.state.timezone)}</span></div>

        </Card.Text>
      </Card.Body>
    </Card>
  )}
}

export default Address;
