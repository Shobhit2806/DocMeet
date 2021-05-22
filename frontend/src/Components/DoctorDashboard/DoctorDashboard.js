import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import NavbarLoggedIn from "../common/NavbarLoggedIn";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./dashboarddr.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: 500,
  },
  body: {
    fontSize: 18,
    fontWeight: "bold",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function DoctorDashboard(props) {
  const classes = useStyles();
  const [doctor, setDoctor] = useState({ doctor: [] });
  const [infos, setInfos] = useState([]);
  const [availability, setavailability] = useState("false");
  const [availability1, setavailability1] = useState("true");

  useEffect(() => {
    async function fetchData() {
      // console.log(props)
      const emailId = props.match.params.emailId;
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      if (token) {
        config.headers["x-auth-token"] = token;
      }

      // You can await here
      const response = await axios.get(`/api/clinics/details/${emailId}`);
      setDoctor(response.data[0]);

      const appointments = await axios.get(
        `/api/appointmenttimes/${emailId}`,
        config
      );
      console.log(appointments);
      //console.log(typeof(appointments))
      setInfos(appointments.data);
    }
    fetchData();
  }, []);

  const handleAvailability = async () => {
    const emailId = props.match.params.emailId;
    await axios({
      method: "put",
      url: `/api/clinics/details/${emailId}`,
      headers: {
        "Content-type": "application/json",
      },
      data: {
        availability: availability,
      },
    });
  };
  const handleAvailability1 = async () => {
    const emailId = props.match.params.emailId;
    await axios({
      method: "put",
      url: `/api/clinics/details/${emailId}`,
      headers: {
        "Content-type": "application/json",
      },
      data: {
        availability: availability1,
      },
    });
  };
  return (
    <div className="main">
      {/* Done(Action btn) */}
      {console.log(doctor)}

      <NavbarLoggedIn />
      <h1 className="head">Bookings:)</h1>
      {/* <div className="doctorname">{doctor.doctorName}</div> */}
      <br />
      <div className="clinicname">{doctor.clinicName} Clinic</div>

      <br />
      {doctor.availability == "false" ? (
        <Button onClick={handleAvailability1} className="stop-btn">
          Start Bookings
        </Button>
      ) : (
        <Button onClick={handleAvailability} className="stop-btn">
          Stop Bookings
        </Button>
      )}

      {console.log(typeof infos)}
      {console.log(infos)}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Patient's Name</StyledTableCell>
              <StyledTableCell>Contact Number</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Booking Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {infos.map((info) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {info.patientName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {info.contactnumber}
                </StyledTableCell>

                <StyledTableCell className="date">{info.date}</StyledTableCell>
                <StyledTableCell>{info.time}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    onClick={async () => {
                      await axios.delete(`/api/appointmenttimes/${info._id}`);
                    }}
                    variant="primary"
                  >
                    Done
                  </Button>
                  {/* <Button onClick={async ()=>{
                await axios.delete(`/api/appointmenttimes/${info._id}`)
              }} className="reject" variant="primary">Reject</Button> */}
                  <Button className="discuss" variant="primary">
                    Discuss
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
