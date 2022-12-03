const express = require('express');
const app = express();
const logger = require('./23-middleware_logger')
const authorize = require('./24-authorize');
// app.use(logger);
//this is using the only one middleware function
//lets look how to call multiple middleware function
app.use([logger,authorize])
app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
//instead of adding logger in every route we can use app.use() function 
// app.get('/',logger,(req,res)=>{
//     res.send('Home')
// })
// app.get('/about',logger,(req,res)=>{
//     res.send('About')
// })
app.get('/api/products',(req,res)=>{
    res.send('Product')
})
app.get('/api/item',(req,res)=>{
    res.send('Item')
})
app.listen(5000,()=>{
    console.log('server is running on port 5000..');
})