const jwt=require('jsonwebtoken');
const config = require('config');


function auth (req,res,next){
    console.log(req);
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access Denied,Token not Provided');

    try{
        const decoded = jwt.verify(token,config.get('jwtPrivateKey'));
        req.user=decoded;
        next();
    }
    catch(ex){
        res.status(400).send('Invalid Token..');
    }
    
}
module.exports = auth;