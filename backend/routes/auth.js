const mongoose = require('mongoose');
const express = require('express');
const { response } = require('express');

const router = express.Router();
const passport = require('passport')
//auth login
router.get("/login",(req,res)=>{
    res.send('Login Route enabled')
})

//auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))

//callback route for google to redirect to
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    //res.send(req.user)
    var token = req.user.token;
    res.redirect("http://localhost:3001/patientdashboard?token=" + token);
    //res.redirect('/profile/')

})



//auth logout
router.get('/logout',(req,res)=>{
    //Handle with passport
    res.send('logging out')
})


module.exports = router;