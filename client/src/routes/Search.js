import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { withRouter } from 'react-router-dom'



import 'bootstrap/dist/css/bootstrap.min.css';

const isEmpty = require("is-empty");


class Search extends Component {
  constructor() {
      super();

      //Set current state to empty
      this.state = {
          name: '',
          date: '',
          time: '',
          locationStreet: '',
          locationCity: '',
          locationState: '',
          locationZip: '',
          errors: {}
      };
  }

  giveLocationData = () => {
    const locationData = {
      city: this.state.locationCity,
      state: this.state.locationState,
      zip: this.state.locationZip,
      weather: this.state.weather,
      icon: this.state.icon
    };
    this.props.giveLocationData(locationData);
  }



  //When input for each is changed, set new state of variable
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  //When the form is submitted, set object to post with axios
  onSubmit = e => {

    this.giveLocationData();
    this.props.history.push("/");
    e.preventDefault();

    const place = {
      name: !isEmpty(this.state.name) ? this.state.name : "",
      street: !isEmpty(this.state.locationStreet) ? this.state.locationStreet : "",
      city: this.state.locationCity,
      state: this.state.locationState,
      zip: !isEmpty(this.state.locationZip) ? this.state.locationZip : "",
      date: moment(this.state.date, 'YYYY-MM-DD').format('dddd, MMMM Do YYYY'),
      time: moment(this.state.time, 'HH:mm a').format('h:mm A'),
    };


    axios.post('/weather', place)
    .then(response => {
        this.setState({
              weather: response.data.currently.summary,
              icon: (response.data.currently.icon).toUpperCase().replace(/-/g,'_'),
          });
    })
    .catch((error) => {
        console.log(error);
    });
  }



  render(){

    return (
      <div className="title-welcome container">
        <div className="row">
          <div className="col-md-8 col-lg-6 offset-lg-3">
            <h3>Enter Location</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <label>Event Name:  </label>
                    <input
                      type="text"
                      id = "name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                    <label>Date:  </label>
                    <input
                      type="date"
                      id = "date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                    <label>Time:  </label>
                    <input
                      type="time"
                      id = "time"
                      className="form-control"
                      value={this.state.time}
                      onChange={this.onChange}
                      />
                </div>
                 <div className="form-group">
                    <label>Address: </label>
                    <input
                      type="text"
                      id = "locationStreet"
                      className="form-control"
                      value={this.state.locationStreet}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                    <label>City: </label>
                    <input
                      type="text"
                      id = "locationCity"
                      className="form-control"
                      value={this.state.locationCity}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                    <label>State: </label>
                    <select value={this.state.locationState} id = "locationState" onChange={this.onChange} className="form-control">
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
                    </select>
                </div>
                 <div className="form-group">
                    <label>Zip Code: </label>
                    <input
                      type="text"
                      id = "locationZip"
                      className="form-control"
                      value={this.state.locationZip}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Find Location" className="btn btn-primary"/>
                </div>
              </form>
            </div>
          </div>
      </div>
    );

  }

}

export default withRouter(Search);
