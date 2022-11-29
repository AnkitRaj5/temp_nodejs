const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
//setup static and middleware
//after doing this index.html is also a static content it will automatically load 
app.use(express.static('./navbar-app'));
//requests
//it will automaticllay load when we put this in statis folder
//there is another option called server side rendering ssr we will use this for sending file 
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

//not found resourse
app.all('*',(req,res)=>{
    res.status(404).send("Resource not found ");
})
app.listen(5000,()=>{
    console.log('server listening on port 5000');
})