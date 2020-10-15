import React from 'react'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import {Link, Redirect } from 'react-router-dom'

export default function Login() {
    const [emailId, setemailId] = React.useState(null);
    const [password, setpassword] = React.useState(null);
    const [loggedIn,setloggedIn] = React.useState(null);

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
          }).then(response=>{
            console.log(response)
            setloggedIn(true);
            //return <Redirect to="/doctordashboard" />
            // console.log("hi///////////")
          })
          .catch(error=>{
              console.log(error)
          });
        }
        if(loggedIn)
        {
          return <Redirect to = {`/doctordashboard/${emailId}`} /> 
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
        <input type="submit" value="Submit" /> 

        </Form>

        </div>
    )
}
