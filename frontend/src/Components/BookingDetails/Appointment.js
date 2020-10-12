import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import PatientDetails from '../BookingDetails/PatientDetails'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Choose an available day for your appointment', 'Choose an available time for your appointment', 'Share your contact information with us and we will send you a reminder'];
}



export default function Appointment() {

  const [patientName, setpatientName] = React.useState(null);
  const [contactnumber, setcontactnumber] = React.useState(null);
  const [date, setdate] = React.useState(null);
  const [time, settime] = React.useState(null);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <input onChange={e => setdate(e.target.value)} type="date"/>;
      case 1:
        return <input onChange={e => settime(e.target.value)} type="time"/>;
      case 2:
        return  <div>
        <div>Name:<input onChange={e => setpatientName(e.target.value)} type="text" name="patientName" id="examplepatientName" placeholder="Patient Name"/></div> 
        
        <div>PhoneNumber:<input type="text" onChange={e => setcontactnumber(e.target.value)} name="contactnumber" id="examplecontactnumber" placeholder="phone number"/></div>
        
        </div>;
      default:
        return 'Unknown step';
    }
  }

  const handleSubmit = e =>{
    console.log(patientName)
    window.alert("Booking Confirmed")
    e.preventDefault();
    axios({
        method: 'post',
        url: 'api/appointmenttimes',
        headers: {
            'Content-Type': 'application/json'
            }, 
        data: {
          patientName:patientName,
          contactnumber:contactnumber,
          date:date,
          time:time
        }
      });
}


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
            <Typography>{getStepContent(index)}</Typography>
              
              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
      
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          //value={selectedDate}
          //onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
      </MuiPickersUtilsProvider> */}
      
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        
        <Paper onClick = {handleSubmit} square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished,Confirm booking</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Confirm
            </Button> 
            
        </Paper>
      )}
    </div>
  );
}
