const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const {Appointment,validateAppointment} = require('../models/appointmenttime')
const app = express()



router.get('/',async (req, res)=>{
    const appointments = await Appointment.find().sort('patientName');
    res.send(appointments)
})

router.get('/:DoctorEmailId',async (req, res)=>{
    const appointments = await Appointment.find({DoctorEmailId:req.params.DoctorEmailId});
    res.send(appointments)
})


router.post('/',async (req,res)=>{
   
    console.log(res);
    const {error} = validateAppointment(req.body);
    console.log(error)
    //console.log(value)
    
    if(error) return res.status(400).send(error.details[0].message);

    let appointment = new Appointment({                    
        DoctorEmailId:req.body.DoctorEmailId,
        date:req.body.date,
        time:req.body.time,
        patientName:req.body.patientName,
        contactnumber:req.body.contactnumber,
        

    });
    appointment = await appointment.save();
    res.send(appointment);
})

router.delete('/:id',async (req,res)=>{
    const appointment = await Appointment.findByIdAndRemove(req.params.id)
    
    
    if(!appointment) {
        res.send(404).send('The Appointment with given id was not found');
        return;
    }
    
    res.send(appointment);
})



module.exports=router
