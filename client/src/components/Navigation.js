import React, { Component } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

class Navigation extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md my-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to={'/'} className="nav-link my-nav-link">Home</Link>
            </li>
            <li className="nav-item">
               <Link to={'/search'} className="nav-link my-nav-link">Search</Link>
            </li>
            <li className="nav-item">
               <Link to={'/options'} className="nav-link my-nav-link">Options</Link>
            </li>
          </ul>
      </nav>
    )}
  }

export default Navigation;
