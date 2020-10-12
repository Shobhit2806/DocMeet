const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const {Appointment,validateAppointment} = require('../models/appointmenttime')
const app = express()



router.get('/',async (req, res)=>{
    const appointments = await Appointment.find().sort('patientName');
    res.send(appointments)
})


router.post('/',async (req,res)=>{
   
    console.log(res);
    const {error} = validateAppointment(req.body);
    console.log(error)
    //console.log(value)
    
    if(error) return res.status(400).send(error.details[0].message);

    let appointment = new Appointment({ 
        date:req.body.date,
        time:req.body.time,
        patientName:req.body.patientName,
        contactnumber:req.body.contactnumber,
        

    });
    appointment = await appointment.save();
    res.send(appointment);
})


module.exports=router
