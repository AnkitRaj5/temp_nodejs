const authorize = (req,res,next)=>{
    console.log(req.user);
    const {user} = req.query;
    if(user === 'ankit'){
        req.user = {name:'ankit',id:3}
        console.log(req.user);
        next();
    }
    else{
        res.status(401).send('Unauthorize')
    }
    
}
module.exports = authorize;