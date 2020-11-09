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
import PatientDashboard from './Components/PatientDashboard/PatientDashboard';
import DoctorDashboard from './Components/DoctorDashboard/DoctorDashboard';
import step2 from './Components/Authentication/step2';
import Login from './Components/Authentication/Login'
import patientLogin from './Components/Patientauth/patientLogin';
import Logout from './Components/Authentication/Logout';

function App() {
  return (
    <div className="App">

<Router>
        <Switch>
        <Route path='/' exact component={Landing} />
        {/* <Route path="/auth/google" component={patientLogin} /> */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/scheduleappointment' component={Appointment} />
        <Route path='/patientdashboard' component={PatientDashboard} />
        <Route path='/doctordashboard/:emailId' component={DoctorDashboard} />
        <Route path='/step2' component={step2} />
        <Route path='/logout' component={Logout} />
        <Route path='/:speciality' component={Doctors} />
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;
