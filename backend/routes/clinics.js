const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const {Clinic,validateClinic,validateClinicLogin} = require('../models/clinic')
const app = express()



router.get('/',async (req, res)=>{
    const clinics = await Clinic.find().sort('name');
    res.send(clinics)
})


router.get('/:specializations',async (req, res)=>{
    const clinics = await Clinic.find({specializations:req.params.specializations}).sort('name');
    res.send(clinics)
})



router.post('/',async (req,res)=>{
   
    console.log(res);
    const {error} = validateClinic(req.body);
    console.log(error)
    //console.log(value)
    
    if(error) return res.status(400).send(error.details[0].message);

    let clinic = new Clinic({ 
        clinicName:req.body.clinicName,
        doctorName:req.body.doctorName,
        emailId:req.body.emailId,
        password:req.body.password,
        specializations:req.body.specializations,
        helpline1:req.body.helpline1,
        helpline2:req.body.helpline2,
        streetline1:req.body.streetline1,
        streetline2:req.body.streetline2,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        zipcode:req.body.zipcode,
        fees:req.body.fees,
        fromDay:req.body.fromDay,
        toDay:req.body.toDay

    });
    clinic = await clinic.save();
    res.send(clinic);
})


//Clinic Login
router.post("/login",async (req,res)=>{
    
    // console.log(res);
    const {error} = validateClinicLogin(req.body);
    //console.log(error)
    if(error) return res.status(400).send(error.details[0].message);

    //Checking if the email exists
    const user = await Clinic.findOne({emailId:req.body.emailId})
    if(!user) return res.status(400).send('Email does not exist')
    //console.log(user.password);
    //If PASSWORD IS CORRECT
    var validPassword = 0;
    if(req.body.password===user.password)
    {
        validPassword=1;
    }
    if(validPassword === 0) return res.status(400).send('Invalid Password');
    res.send('Logged in!')


})

module.exports=router
