import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import axios from "axios"
import LoginForm from "./LoginForm"
import loginimg from "../../assets/images/login1.gif"
import Navbar from "../landing-page/navbar"
import { Link, Redirect } from "react-router-dom"
import CustomerLoginForm from "./CustomerLoginForm"
import "./login.css"

export default function CustomerLogin() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-6 video-box">
            <img src={loginimg} className="img-fluid" alt="login image" />
          </div>

          <div className="loginWrapper">
            <div className="sectionTitle">
              <h2 className="sectionText">Login Here</h2>
              <Link to="/login">Are you a Doctor? Login Here</Link>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <CustomerLoginForm/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
