import React from 'react';
import './App.css';
import Landing from './Components/landing-page/landing'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Doctors from './Components/Doctors/Doctors';


function App() {
  return (
    <div className="App">

<Router>
        <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/doctors' component={Doctors} />
          </Switch>
          </Router>
      
    </div>
  );
}

export default App;
