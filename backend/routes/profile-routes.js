const router = require('express').Router();

const authCheck =(req,res,next)=>{
    if(!req.user){
        res.redirect('/auth/login');
    }
    else{
        next();
    }
}


router.get('/',authCheck,(req,res)=>{
    //console.log(req)
    res.send(req.user.userName);
    //res.status(200).send('you are logged in,this is your profile', + req.user)
})

module.exports = router;