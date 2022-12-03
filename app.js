const express = require('express');
const app = express();
let {people} = require('./data')
//static content 
app.use(express.static('./methods-public'));
app.use(express.json())
//parsing data from url
app.use(express.urlencoded({extended:false}))
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})
//post method
app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:'please provide the data'})
    }
    res.status(201).json({success:true, person:name})
})
app.post('/login',(req,res)=>{
    console.log(req.body)
    const {name} = req.body;
    if(name){
        return res.send(`welcome ${name}`);
    }
    res.status(401).send("please fill the form")
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})