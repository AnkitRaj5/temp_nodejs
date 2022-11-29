// const app = require('express')(); it is most prefereable on web 
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hello there")
})
app.get('/about',(req,res)=>{
    res.send("About Page");
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
})
app.listen(5000,()=>{
    console.log('sever is listening on port 5000');
})
// app.get()
// app.post()
// app.put()
// app.delete()
// app.all()
// app.use()
// app.listen()