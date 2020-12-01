import React from 'react'
import NavbarLoggedIn from '../common/NavbarLoggedIn';
import Appointments from './Appointments';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import calendar from '../../assets/images/calendar.svg'
import chat from '../../assets/images/chat.svg'
import report from '../../assets/images/medical-history.svg'

import './patdash.css'
import AppointmentsDone from './AppointmentsDone';

function TabPanel(props) {
  
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F3F7FA',
    width: 500,
    position:'absolute',
    right:15,
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));


const results =[
  {
      "name":"Dr. R.C Bansal",
      "time":"9:30",
      "phone":"8497456121",
      "past":1
  },
  {
      "name":"Dr.Praveen Bansal",
      "time":"10:30",
      "phone":"8497456121",
      "past":0
  },
  {
      "name":"Dr. R.C Bansal",
      "time":"9:30",
      "phone":"8497456121",
      "past":1
  },
  
]

const results2 =[
  {
      "name":"Dr. Bansal",
      "time":"9:30",
      "phone":"8497456121",
      "past":1
  },
  {
      "name":"Dr.MB Bansal",
      "time":"10:30",
      "phone":"8497456121",
      "past":0
  },
  {
      "name":"Dr. Garg",
      "time":"9:30",
      "phone":"8497456121",
      "past":1
  },
  
]


export default function PatientDashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


    return (
        <div>
            <NavbarLoggedIn />
          <div className="headline">  How are you,Steve?</div>
          <div className="alerts">
          <div className="calendar"><img src={calendar} width="40%"/></div>
          <div className="createalerts">Create Alerts</div>
          </div>

          <div className="chat">
          <div className="chatimg"><img src={chat} width="50%"/></div>
          <div className="chat-text">Chat</div>
          </div>
          
          <div className="medical">
          <div className="medicalimg"><img src={report} width="50%"/></div>
          <div className="medical-text">Medical Reports</div>
          </div>
          <div className={classes.root}>
          <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Upcoming Appointments" {...a11yProps(0)} />
          <Tab label="Past Appointments" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
 {results.map(result => (<Appointments result={result} />))} 
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} >
        {results2.map(result => (<AppointmentsDone result={result} />))} 
          </TabPanel>
      </SwipeableViews>
      
          
           
         
      </div>
            {/* <div className="appointments">
            <h3 className="textup">Upcoming Appointment</h3>
        {results.map(result => (
              
              <Appointments result={result} />
            
          ))}
            </div> */}
      </div>
    )
}
