const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.end("you have glitch page");
// });

//using event emitter 
const server = http.createServer();
//emits request event
//subscribe to it / listen to it/ respond to it

server.on('request',(req,res)=>{
    res.end("welcome");
});

server.listen(5000);
// server.listen(5000, ()=>{
//     console.log("server listening on port 5000....");
// });