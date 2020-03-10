import React, { Component } from "react";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Search from "../routes/Search";


import './Navigation.css';

class Navigation extends Component {

  constructor(props){
    super(props);
    this.state = {
      search: false
    };
  }

  toggleSearch = e => {
    this.setState({
      search: !this.state.search
    })
  }

  render() {
    return (

      <div >

        <nav className="navbar navbar-expand-md my-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <Link to={'/'} className="nav-link my-nav-link">Home</Link>
              </li>
              <li>
                  <div onClick={this.toggleSearch} className="nav-link my-nav-link">Search</div>
              </li>
              </ul>

              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                 <Link to={'/options'} className="nav-link my-nav-link">Options</Link>
              </li>
            </ul>
        </nav>
        { this.state.search ? (
                                  <div className="row justify-content-start">
                                    <div className="col-5 mb-2">
                                      <Search giveLocationData={this.getLocation}/>
                                    </div>
                                  </div>
                                ) :
                                (<div><br/><br/></div>)}

      </div>



    )}
  }

export default Navigation;
