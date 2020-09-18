const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Clinic,validateClinic} = require('../models/clinic')


router.get('/',async (req, res)=>{
    const clinics = await Clinic.find().sort('name');
    res.send(clinics)
})


router.post('/',async (req,res)=>{
   
    const {error} = validateClinic(req.body);
    console.log(error)
    //console.log(value)
    
    if(error) return res.status(400).send(error.details[0].message);

    let clinic = new Clinic({ 
        name:req.body.name,
        phone:req.body.phone,
        specializations:req.body.specializations,
        streetline1:req.body.streetline1,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        zipcode:req.body.zipcode,
        
    });
    clinic = await clinic.save();
    res.send(clinic);
})


module.exports=router
