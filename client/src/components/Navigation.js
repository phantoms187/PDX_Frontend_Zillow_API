import React, { Component } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

class Navigation extends Component {

  render() {
    return (
      <nav class="navbar navbar-expand-md my-nav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link to={'/'} className="nav-link my-nav-link">Home</Link>
            </li>
            <li class="nav-item">
               <Link to={'/search'} className="nav-link my-nav-link">Search</Link>
            </li>
            <li class="nav-item">
               <Link to={'/options'} className="nav-link my-nav-link">Options</Link>
            </li>
          </ul>
      </nav>
    )}
  }

export default Navigation;
