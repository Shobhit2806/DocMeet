import React, { Component } from "react"
import logo from "../../assets/images/logo.png"

import "./navbar.css"

export default class NavbarLoggedIn extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="brand-logo">
            <a href="http://localhost:3001">
              <img className="logoimg" src={logo} alt="logo" />
            </a>
          </div>
          {/* <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a> */}
          <div className="navlinks">
            <ul>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
