const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const config = require('config');
const {Clinic,validateClinic,validateClinicLogin} = require('../models/clinic')
const app = express()
const jwt=require('jsonwebtoken')


router.get('/',async (req, res)=>{
    const clinics = await Clinic.find().sort('name');
    res.send(clinics)
})

router.get('/details/:emailId',async (req, res)=>{
    const clinics = await Clinic.find({emailId:req.params.emailId});
    console.log(clinics);
    res.send(clinics)
})

router.put('/details/:emailId',async (req, res)=>{
    try{
        console.log(req.body);
        const clinics = await Clinic.findOne({emailId:req.params.emailId});
        clinics.set({availability:req.body.availability})
        clinics.save();
        res.send(clinics)
    }catch(err){
        console.log(err);
    }
    
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

    let clinic = await Clinic.findOne({emailId:req.body.emailId});
    if(clinic) return res.status(400).send('User already registered.')


    clinic = new Clinic({ 
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
        toDay:req.body.toDay,
        availability:req.body.availability

    });

    const salt = await bcrypt.genSalt(10);
    clinic.password = await bcrypt.hash(clinic.password,salt)
    clinic = await clinic.save();
    
    const token = clinic.generateAuthToken();
    //const token = jwt.sign({_id:clinic._id},config.get('jwtPrivateKey'));
    res.header('x-auth-token',token).send(clinic);
})


//Clinic Login
router.post("/login",async (req,res)=>{
    
    // console.log(res);
    const {error} = validateClinicLogin(req.body);
    //console.log(error)
    if(error) return res.status(400).send(error.details[0].message);

    //Checking if the email exists
    const user = await Clinic.findOne({emailId:req.body.emailId})
    if(!user) return res.status(400).send('Email or Password is Incorrect')
    //console.log(user.password);
    //If PASSWORD IS CORRECT

    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if(!validPassword) return res.status(400).send('Email or Password is Incorrect')

    const token = user.generateAuthToken();
    //const token = jwt.sign({_id:user._id},config.get('jwtPrivateKey'));
    res.header('x-auth-token',token).send({token,user});
//    res.send(token);
    
    


})

module.exports=router
