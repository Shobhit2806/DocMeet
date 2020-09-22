const mongoose = require('mongoose');
const express = require('express')
const Joi = require('joi');




const clinicSchema = new mongoose.Schema({
    clinicName:{
        type: String,
        required:true,
        minlength:5,
        maxlength:50,
        trim:true
    },
    doctorName:{
        type: String,
        required:true,
        minlength:5,
        maxlength:50,
        trim:true
    },
    emailId:{
        type: String,
        required:true,
        minlength:5,
        maxlength:50,
        trim:true
    },
    password:{
        type: String,
        required:true,
        minlength:5,
        maxlength:50,
        trim:true
    },
    
    specializations:{
        type:String,
        required:true
    },
    helpline1:{
        type: Number,
        minlength:10,
        maxlength:10,
        required:true
    },
    helpline2:{
        type: Number,
        minlength:10,
        maxlength:10
        
    },
    streetline1:{
        type: String,
        required:true,
    },
    streetline2:{
        type: String,
        
    },
    city:{
        type: String,
        required:true,
    },
    state:{
        type: String,
        required:true,
    },
    country:{
        type: String,
        required:true,
    },
    zipcode:{
        type: String,
        required:true,
    },
    fees:{
        type: Number,
        required:true,
    },
    fromDay:{
        type:String,
        required:true
    },
    toDay:{
        type:String,
        required:true
    }
    

})

const Clinic = mongoose.model('Clinic',clinicSchema);


function validateClinic(clinic){
    const schema=Joi.object({
        
        
        clinicName:Joi.string().min(5).required(),
        doctorName:Joi.string().min(5).required(),
        emailId:Joi.string().min(5).required(),
        password:Joi.string().min(5).required(),
        helpline1:Joi.number().min(10).required(),
        helpline2:Joi.number().min(10),
        streetline1:Joi.string().required(),
        streetline2:Joi.string().required(),
        city:Joi.string().required(),
        specializations:Joi.string().required(),
        city:Joi.string().required(),
        state:Joi.string().required(),
        country:Joi.string().required(),
        zipcode:Joi.string().required(),
        fees:Joi.number().required(),
        fromDay:Joi.string().required(),
        toDay:Joi.string().required()

    })
    return schema.validate(clinic);
}

exports.Clinic = Clinic;
exports.validateClinic = validateClinic;