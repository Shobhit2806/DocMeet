import React from 'react'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import {Link } from 'react-router-dom'

export default function Login() {
    const [emailId, setemailId] = React.useState(null);
    const [password, setpassword] = React.useState(null);
    
    const handleSubmit = e =>{
        e.preventDefault();
        axios({
            method: 'post',
            url: 'api/clinics/login',
            headers: {
                'Content-Type': 'application/json'
                }, 
            data: {
              emailId:emailId,
              password:password,
             }
          });
        }
    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
            <FormGroup row>
            <Label for="exampleEmail">Email</Label>
            <Input onChange={e => setemailId(e.target.value)} type="email" name="emailId" id="exampleemailId" placeholder="Email" />
        </FormGroup>
        <FormGroup row>
            <Label for="examplePassword">Password</Label>
            <Input onChange={e => setpassword(e.target.value)} type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <Link to="/doctordashboard"> <input type="submit" value="Submit" /> </Link>

        </Form>

        </div>
    )
}
