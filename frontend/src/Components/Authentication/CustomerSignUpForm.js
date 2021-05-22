import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { Link } from "react-router-dom"
import axios from "axios"
import "./signup.css"
export default function CustomerSignupForm() {
  const [emailId, setemailId] = React.useState(null)
  const [password, setpassword] = React.useState(null)
 const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      url: "api/patients/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        emailId: emailId,
        password: password,
      },
    })
  }

  return (
    <div className="formSignupPar">
      <Form className="formSignup" onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="exampleEmail">Email</Label>
          <Input
            onChange={(e) => setemailId(e.target.value)}
            type="email"
            name="emailId"
            id="exampleemailId"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword">Password</Label>
          <Input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>

        <input type="submit" value="Submit" />
      </Form>
    </div>
  )
}
