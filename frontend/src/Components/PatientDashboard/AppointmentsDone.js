import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import HotelIcon from '@material-ui/icons/Hotel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './appointment.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import Box from '@material-ui/core/Box';



const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 6px',
    width:300,
    height:200
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


export default function AppointmentsDone({result}) {
    const classes = useStyles();

    const handleDelete = async (e) =>{
      console.log(e);
        //await axios.delete(`api/appointmenttimes/`)
    }

    return (
        <div className="apntmnts">
            <Timeline>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {result.time}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          <HotelIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {result.name}
            </Typography>
           
            <Typography>{result.phone}</Typography>
            <Typography  component="h1">
              Booking Number:
            </Typography>
            <Typography  component="h1">
              Current Booking Number:
            </Typography>
            <Typography>
            <Box component="fieldset" mb={1} borderColor="transparent">
      
      <Rating
        name="customized-icons"
        defaultValue={2}
        getLabelText={(value) => customIcons[value].label}
        IconContainerComponent={IconContainer}
      />
    </Box>
            </Typography>
            <Link to="/scheduleappointment"><Button className="reschedule" variant="primary">Reschedule</Button></Link> 
            <Button className="cancel" onClick={handleDelete} variant="primary">Cancel</Button>
          </Paper>
          
        </TimelineContent>
      </TimelineItem>
     
    </Timeline>
        </div>
    )
}
