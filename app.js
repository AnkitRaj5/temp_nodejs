const express = require('express');
const app = express();
const route1 = require('./router/people');
const route2 = require('./router/auth');
//static content 
app.use(express.static('./methods-public'));
app.use(express.json())
//parsing data from url
app.use(express.urlencoded({extended:false}))
//base path for router
app.use('/api/people', route1)

app.use('/login', route2);

app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})