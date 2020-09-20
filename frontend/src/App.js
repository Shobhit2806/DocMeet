import React from 'react';
import './App.css';
import Landing from './Components/landing-page/landing'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Doctors from './Components/Doctors/Doctors';
import Signup from './Components/Authentication/Signup';
import PatientDetails from './Components/BookingDetails/PatientDetails';
import Appointment from './Components/BookingDetails/Appointment';


function App() {
  return (
    <div className="App">

<Router>
        <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/doctors' component={Doctors} />
        <Route path='/signup' component={Signup} />
        <Route path='/patientdetails' component={PatientDetails} />
        <Route path='/scheduleappointment' component={Appointment} />
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;
