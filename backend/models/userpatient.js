const mongoose = require('mongoose');
const express = require('express')



const userSchema = new mongoose.Schema({
    userName:{
        type: String,
    },
    googleId:{
        type: String,
    },
    token:{
        type:String
    }
})

const User = mongoose.model('User',userSchema);


exports.User = User;
