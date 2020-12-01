import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button} from 'reactstrap';
import {Link } from 'react-router-dom'
import Navbar from '../landing-page/navbar'
import image1 from '../../assets/images/img1.svg'
const useStyles = makeStyles({
  root: {
    width: '50%',
    position:"absolute",
    left:"45%",
    top:"20%"
  },
});

export default function ActionsInAccordionSummary() {
 
    const days=[
        {
          day:'Monday'
        },
        {
          day:'Tuesday'
        },
        {
          day:'Wednesday'
        },
        {
          day:'Thursday'
        },
        {
          day:'Friday'
        },
        {
          day:'Saturday'
        }
      ]
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <img src={image1} className="imgsignup" alt="image" />

    <div className={classes.root}>
     <h3>Select Clinic's Opening Hours...</h3>
{days.map(val => (
  <Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon/>}
    aria-label="Expand"
    aria-controls="additional-actions1-content"
    id="additional-actions1-header"
  >
    <FormControlLabel
      aria-label="Acknowledge"
      onClick={(event) => event.stopPropagation()}
      onFocus={(event) => event.stopPropagation()}
      control={<Checkbox />}
      label={val.day}
    />
  </AccordionSummary>
  <AccordionDetails>
    
  
  
  <input type="time" id="appt" name="appt"/>
  To:
  <input type="time" id="appt" name="appt"/>
  
  <label for="appt">And</label>
  
  <input type="time" id="appt" name="appt"/>
  To:
  <input type="time" id="appt" name="appt"/>
  

  </AccordionDetails>
</Accordion>
))}
  <Link to="/doctordashboard"> <Button color="primary">Submit</Button></Link> 
    </div>
    </div>
  );
}
