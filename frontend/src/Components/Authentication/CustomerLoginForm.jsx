import React from "react"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap"
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import "./login.css"
export default function CustomerLoginForm() {
  const [emailId, setemailId] = React.useState(null)
  const [password, setpassword] = React.useState(null)
  const [loggedIn, setloggedIn] = React.useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      url: "api/patients/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        emailId: emailId,
        password: password,
      },
    })
      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data.token)

        setloggedIn(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  if (loggedIn) {
    console.log(emailId)
    return (
      <Redirect
        to={{
          pathname: "/patientdashboard",
          state: {
            patientEmailId: emailId,
          },
        }}
      />
    )
  }
  return (
    <div>
      <Form className="loginForm">
        <FormGroup row className="emailField">
          <Label for="exampleemailId">Email Id</Label>
          <Input
            onChange={(e) => setemailId(e.target.value)}
            type="text"
            name="email"
            id="exampleemail"
            placeholder="email Id"
          />
        </FormGroup>

        <FormGroup row className="passwordField">
          <Label for="examplePassword">Password</Label>
          <Input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>

        <Button className="loginBtn" onClick={handleSubmit} color="primary">
          Log In
        </Button>
        <Button className="GoogleloginBtn" onClick={handleSubmit} color="primary">
          Log In With Google
        </Button>
      </Form>
    </div>
  )
}
