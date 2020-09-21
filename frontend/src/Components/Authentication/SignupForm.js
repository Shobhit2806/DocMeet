import React from 'react'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link } from 'react-router-dom'


export default function SignupForm() {

 

    return (
        <div>
            <Form>
            
   
        <FormGroup row>
            <Label for="exampleEmail">Email</Label>
            <Input  type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup row>
            <Label for="exampleName">First Name</Label>
            <Input  type="text" name="first_name" id="exampleName" placeholder="First Name"/>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleLastName">Last Name</Label>
            <Input  type="text" name="last_name" id="exampleName" placeholder="Last Name"/>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleAddress">Address</Label>
            <Input  type="text" name="address" id="exampleAddress" placeholder="Address"/>
        </FormGroup>
       
        <FormGroup row>
            <Label for="examplePassword">Password</Label>
            <Input   type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <FormGroup row>
            <Label for="examplePassword">Confirm Password</Label>
            <Input  type="password" name="password2" id="exampleConfirmPassword" placeholder="Confirm password" />
        </FormGroup>
      


    
     
      <Link to="/step2"><Button color="primary">Next</Button></Link>
      
    </Form>
      

    

        </div>
    )
}
