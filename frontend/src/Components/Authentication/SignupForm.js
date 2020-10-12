import React from 'react'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link } from 'react-router-dom'
import axios from 'axios'

export default function SignupForm() {
    const [clinicname, setclinicName] = React.useState(null);
    const [doctorName, setdoctorName] = React.useState(null);
    const [emailId, setemailId] = React.useState(null);
    const [password, setpassword] = React.useState(null);
    const [specializations, setspecializations] = React.useState(null);
    const [streetline1, setstreetline1] = React.useState(null);
    const [streetline2, setstreetline2] = React.useState(null);
    const [helpline1, sethelpline1] = React.useState(null);
    const [helpline2, sethelpline2] = React.useState(null);
    const [city, setcity] = React.useState(null);
    const [state, setstate] = React.useState(null);
    const [country, setcountry] = React.useState(null);
    const [zipcode, setzipcode] = React.useState(null);
    const [fees, setfees] = React.useState(null);
    const [fromDay, setfromDay] = React.useState(null);
    const [toDay, settoDay] = React.useState(null);
  

    const handleSubmit = e =>{
        e.preventDefault();
        axios({
            method: 'post',
            url: 'api/clinics',
            headers: {
                'Content-Type': 'application/json'
                }, 
            data: {
              clinicName:clinicname,
              doctorName :doctorName,
              emailId:emailId,
              password:password,
              specializations:specializations,
              streetline1:streetline1,
              streetline2:streetline2,
              helpline1:helpline1,
              helpline2:helpline2,
              city:city,
              state:state,
              country:country,
              zipcode:zipcode,
              fees:fees,
              fromDay:fromDay,
              toDay:toDay
          
            }
          });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
        <FormGroup row>
            <Label for="exampleClinicName">ClinicName</Label>
            <Input  onChange={e => setclinicName(e.target.value)} type="text" name="clinicName" id="exampleclinicName" placeholder="Clinic Name" />
        </FormGroup>
        <FormGroup row>
            <Label for="exampleDoctorName">DoctorName</Label>
            <Input onChange={e => setdoctorName(e.target.value)}  type="text" name="doctorName" id="exampleDoctorName" placeholder="Doctor Name" />
        </FormGroup>
        <FormGroup row>
            <Label for="exampleEmail">Email</Label>
            <Input onChange={e => setemailId(e.target.value)} type="email" name="emailId" id="exampleemailId" placeholder="Email" />
        </FormGroup>
        <FormGroup row>
            <Label for="examplePassword">Password</Label>
            <Input  onChange={e => setpassword(e.target.value)} type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <FormGroup row>
            <Label for="examplespecializations">Specializations</Label>
           
            <Input onChange={e => setspecializations(e.target.value)}  type="select" name="specializations" id="exampleSpecializations" placeholder="Specializations">
            <option></option>
            <option>Dentist</option>
          <option>Dietician</option>
          <option>General Surgeon</option>
          <option>General Physician</option>
          <option>Orthopedist</option>
          <option>Pediatrician</option>
          <option>Physiotherapist</option>
          
            </Input>
        </FormGroup>        
        <FormGroup row>
            <Label for="exampleHelpline1">Helpline1</Label>
            <Input onChange={e => sethelpline1(e.target.value)}  type="text" name="helpline1" id="exampleHelpline1" placeholder="Helpline1" />
        </FormGroup>        
        <FormGroup row>
            <Label for="exampleHelpline2">Helpline2</Label>
            <Input onChange={e => sethelpline2(e.target.value)}  type="text" name="helpline2" id="exampleHelpline2" placeholder="Helpline2" />
        </FormGroup>        
        <FormGroup row>
            <Label for="exampleStreetline1">Streetline1</Label>
            <Input onChange={e => setstreetline1(e.target.value)}  type="text" name="Streetline1" id="exampleStreetline1" placeholder="Streetline1" />
        </FormGroup>        
        <FormGroup row>
            <Label for="exampleStreetline2">Streetline2</Label>
            <Input onChange={e => setstreetline2(e.target.value)}  type="text" name="Streetline2" id="exampleStreetline2" placeholder="Streetline2" />
        </FormGroup>        
        <FormGroup row>
            <Label for="examplecity">city</Label>
            <Input onChange={e => setcity(e.target.value)}  type="text" name="city" id="examplecity" placeholder="city" />
        </FormGroup>        
        <FormGroup row>
            <Label for="examplestate">State</Label>
            <Input  onChange={e => setstate(e.target.value)} type="text" name="state" id="examplestate" placeholder="state" />
        </FormGroup>        
        <FormGroup row>
            <Label for="examplecountry">Country</Label>
            <Input onChange={e => setcountry(e.target.value)}  type="text" name="country" id="examplecountry" placeholder="country" />
        </FormGroup>        
        <FormGroup row>
            <Label for="examplezipcode">Zip Code</Label>
            <Input onChange={e => setzipcode(e.target.value)}  type="text" name="zipcode" id="examplezipcode" placeholder="zipcode" />
        </FormGroup>        
        <FormGroup row>
            <Label for="examplefees">Fees</Label>
            <Input onChange={e => setfees(e.target.value)}  type="text" name="fees" id="examplefees" placeholder="fees" />
        </FormGroup>        
        <FormGroup row>
            <Label for="examplefromDay">From</Label>
            <Input onChange={e => setfromDay(e.target.value)}  type="select" name="fromDay" id="examplefromDay" placeholder="fromDay" >
            <option></option>
            <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>

            </Input>
        </FormGroup>        
        <FormGroup row>
            <Label for="exampletoDay">To</Label>
            <Input onChange={e => settoDay(e.target.value)}  type="select" name="toDay" id="exampletoDay" placeholder="toDay" >
            <option></option>
            <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>

                </Input>
        </FormGroup>        

        <input type="submit" value="Submit" />

     
      <Link to="/step2"><Button color="primary">Next</Button></Link>
      
    </Form>
      

    

        </div>
    )
}
