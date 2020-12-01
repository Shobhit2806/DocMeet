const mongoose = require('mongoose');
const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();
const {Appointment,validateAppointment} = require('../models/appointmenttime')
const app = express()



router.get('/',async (req, res)=>{



    const appointments = await Appointment.find().sort('patientName');
    res.send(appointments)
})

//Doctor Dashboard

router.get('/:DoctorEmailId',auth,async (req, res)=>{

    //console.log(req);
   

    const appointments = await Appointment.find({DoctorEmailId:req.params.DoctorEmailId}).sort({date:1,time:1});
    res.send(appointments)
})

//Patient Dashboard

// router.get('/:patientId',async (req, res)=>{
//     const appointments = await Appointment.find({patientId:req.params.patientId});
//     res.send(appointments)
// })



router.post('/',async (req,res)=>{
   
    
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
