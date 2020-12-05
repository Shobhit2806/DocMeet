const mongoose = require('mongoose');
const express = require('express')
const Joi = require('joi');




const appointmentSchema = new mongoose.Schema({
    DoctorEmailId:{
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
        minlength:5,
        maxlength:50,
        trim:true
    },
    contactnumber:{
        type: Number,
        minlength:10,
        maxlength:10,
        required:true
    }
   

})

const Appointment = mongoose.model('Appointment',appointmentSchema);


function validateAppointment(appointment){
    const schema=Joi.object({
        
        DoctorEmailId:Joi.string().required(),
        patientName:Joi.string().min(5).required(),
        contactnumber:Joi.number().min(10).required(),
        date:Joi.string().required(),
        time:Joi.string().required()

    })
    return schema.validate(appointment);
}

exports.Appointment = Appointment;
exports.validateAppointment = validateAppointment;