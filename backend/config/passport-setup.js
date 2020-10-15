const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const {User} = require('../models/userpatient')

passport.serializeUser((user,done)=>{
    done(null,user.id)
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    });
});


passport.use(
    new GoogleStrategy({
        //options for google startegy
        //callbackURL:'/auth/google/redirect',
        callbackURL:"http://localhost:3000/auth/google/redirect",
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{


        User.findOne({googleId:profile.id}).then((currentUser)=>{
            if(currentUser){
                console.log('user is',+currentUser)
                done(null,currentUser);
            }
            else{
                new User({
                    userName:profile.displayName,
                    googleId:profile.id,
                    token:accessToken
                }).save().then((newUser)=>{
                    console.log('new user created',+ newUser)
                    done(null,newUser);
                })
            }
        })



        //passport callback function
        console.log('passport callback function fired')
        console.log(profile);
      
    })
)