const mongoose = require('mongoose');
const express = require('express')
const Joi = require('joi');

// const addressSchema = new mongoose.Schema({
//     streetline1:{
//         type: String,
//         required:true,
//     },
//     city:{
//         type: String,
//         required:true,
//     },
//     state:{
//         type: String,
//         required:true,
//     },
//     country:{
//         type: String,
//         required:true,
//     },
//     zipcode:{
//         type: String,
//         required:true,
//     }
// })


const clinicSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:5,
        maxlength:50,
        trim:true
    },
    phone:{
        type: String,
        required:true
    },
    specializations:{
        type:String,
        required:true
    },
            streetline1:{
                type: String,
                required:true,
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
            }
        
        

})

const Clinic = mongoose.model('Clinic',clinicSchema);


function validateClinic(clinic){
    const schema=Joi.object({
        
        name:Joi.string().min(5).required(),
        phone:Joi.string().min(10).required(),
        city:Joi.string().required(),
        specializations:Joi.string().required(),
        streetline1:Joi.string().required(),
        city:Joi.string().required(),
        state:Joi.string().required(),
        country:Joi.string().required(),
        zipcode:Joi.string().required()
    })
    return schema.validate(clinic);
}

exports.Clinic = Clinic;
exports.validateClinic = validateClinic;