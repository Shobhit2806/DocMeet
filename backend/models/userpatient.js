const mongoose = require("mongoose");
const express = require("express");
const Joi = require('joi');
const jwt=require('jsonwebtoken');
const config = require('config');



const userSchema = new mongoose.Schema({
  emailId: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
  return token;
};

const User = mongoose.model("User", userSchema);

function validatePatient(patient) {
  const schema = Joi.object({
    emailId: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(patient);
}

function validatePatientLogin(patientlogin) {
  const schema = Joi.object({
    emailId: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(patientlogin);
}

exports.User = User;
exports.validatePatient = validatePatient;
exports.validatePatientLogin = validatePatientLogin;
