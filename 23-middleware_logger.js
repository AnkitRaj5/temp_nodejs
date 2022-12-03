const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url , time );
    // res.send("Hello welcome Home")
    //direct end or we can pass this to next
    next();
}
module.exports = logger;