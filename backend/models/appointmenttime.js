const mongoose = require('mongoose');
const express = require('express')
const Joi = require('joi');
const Clinic = require('./clinic')

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
        trim:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        minlength:5,
        maxlength:255,
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
    },
    availability:{
        type:String,
        default:true
    }
    

})


const appointmentSchema = new mongoose.Schema({
    DoctorEmailId:{
        type:String,
        required:true
    },
    PatientEmailId:{
        type:String,
        required:true
    },
    date:{
        type: String,
        required:true,
        minlength:5,
        maxlength:50
    },
    time:{
        type: String,
        required:true,
        minlength:5,
        maxlength:50
    },
    patientName:{
        type: String,
        required:true,
        maxlength:50,
        trim:true
    },
    contactnumber:{
        type: Number,
        minlength:10,
        maxlength:10,
        required:true
    },
    // doctor:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Clinic'
    // }
    doctor:clinicSchema
    

   

})


const Appointment = mongoose.model('Appointment',appointmentSchema);


function validateAppointment(appointment){
    const schema=Joi.object({
        
        DoctorEmailId:Joi.string().required(),
        PatientEmailId:Joi.string().required(),
        patientName:Joi.string().required(),
        contactnumber:Joi.number().min(10).required(),
        date:Joi.string().required(),
        time:Joi.string().required(),
        doctor:Joi.required()
        

    })
    return schema.validate(appointment);
}

exports.Appointment = Appointment;
exports.validateAppointment = validateAppointment;