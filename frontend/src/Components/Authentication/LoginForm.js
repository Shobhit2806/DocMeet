import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import {Link, Redirect } from 'react-router-dom'


export default function LoginForm() {
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
            localStorage.setItem('token',response.data.token);
        
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
             <div>
    <Form className="form-fields">
        <FormGroup row>
            <Label for="exampleemailId">Email Id</Label>
            <Input  onChange={e => setemailId(e.target.value)}   type="text" name="email" id="exampleemail" placeholder="email Id" />
        </FormGroup>
       
        
        <FormGroup row>
            <Label for="examplePassword">Password</Label>
            <Input onChange={e => setpassword(e.target.value)}   type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
       
        <Button onClick={handleSubmit} color="primary">Log In</Button>
    </Form>
        </div>
        </div>
    )
}
