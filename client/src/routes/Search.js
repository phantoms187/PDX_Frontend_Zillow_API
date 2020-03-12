import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const isEmpty = require("is-empty");


class Search extends Component {
  constructor(props) {
      super(props);

      //Set current state to empty
      this.state = {
          locationStreet: '',
          locationCity: '',
          locationState: '',
          locationZip: '',
          errors: {}
      };
  }

  giveLocationDataFromSearch = () => {
    const locationData = {
      street: this.state.locationStreet,
      city: this.state.locationCity,
      state: this.state.locationState,
      zip: this.state.locationZip,
      weather: this.state.weather,
      icon: this.state.icon,
      temperature: this.state.temperature,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      timezone:this.state.timezone,
    };
    this.props.giveLocationData(locationData);
  }

  //When input for each is changed, set new state of variable
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  //When the form is submitted, set object to post with axios
  onSubmit = e => {
    e.preventDefault();
    const place = {
      street: !isEmpty(this.state.locationStreet) ? this.state.locationStreet : "",
      city: this.state.locationCity,
      state: this.state.locationState,
      zip: !isEmpty(this.state.locationZip) ? this.state.locationZip : "",
    };

    axios.post('/weather', place)
    .then(response => {
      this.setState({
          latitude: response.data.latitude,
          longitude: response.data.longitude,
          timezone:response.data.timezone,
          temperature: response.data.currently.temperature,
          weather: response.data.currently.summary,
          icon: (response.data.currently.icon).toUpperCase().replace(/-/g,'_'),
      });
    })
    .then( () => {
      this.giveLocationDataFromSearch();
      this.props.toggleSearch();

    })
    .catch((error) => {
        console.log(error);
    });
  }

  render(){

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Row>
          <Col>
            <Form.Control type="text" placeholder="Street" value={this.state.locationStreet} onChange={this.onChange} id ="locationStreet"/>
          </Col>
          <Col>
            <Form.Control type="text" placeholder="City" value={this.state.locationCity} onChange={this.onChange} id ="locationCity" />
          </Col>
          <Col>
            <Form.Control placeholder="State" value={this.state.locationState} onChange={this.onChange} id ="locationState" as="select">
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Zip" value={this.state.locationZip} onChange={this.onChange} id ="locationZip" />
          </Col>
          <Button variant="success" type="submit">
            Find Location
          </Button>
        </Form.Row>
      </Form>



    );

  }

}

export default withRouter(Search);
