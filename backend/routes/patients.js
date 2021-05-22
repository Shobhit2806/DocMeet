const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const config = require("config");
const {
  User,
  validatePatient,
  validatePatientLogin,
} = require("../models/userpatient");
const app = express();
const jwt = require("jsonwebtoken");

//Patient SignUp

router.post("/register", async (req, res) => {
  console.log(res);
  const { error } = validatePatient(req.body);
  console.log(error);
  //console.log(value)

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ emailId: req.body.emailId });
  if (user) return res.status(400).send("User already registered.");

  user = new User({
    emailId: req.body.emailId,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user = await user.save();

  const token = user.generateAuthToken();
  //const token = jwt.sign({_id:clinic._id},config.get('jwtPrivateKey'));
  res.header("x-auth-token", token).send(user);
});

//Patient Login
router.post("/login", async (req, res) => {
  // console.log(res);
  const { error } = validatePatientLogin(req.body);
  //console.log(error)
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the email exists
  const user = await User.findOne({ emailId: req.body.emailId });
  if (!user) return res.status(400).send("Email or Password is Incorrect");
  //console.log(user.password);
  //If PASSWORD IS CORRECT

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Email or Password is Incorrect");

  const token = user.generateAuthToken();
  //const token = jwt.sign({_id:user._id},config.get('jwtPrivateKey'));
  res.header("x-auth-token", token).send({ token, user });
  //    res.send(token);
});

module.exports = router;
