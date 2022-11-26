const http = require('http');
const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end("home page");
   }
   if(req.url === '/about'){
    res.end("about page");
   }
   res.end("error page"); 
});
server.listen(3000, ()=>{
    console.log("server listening on port 5000....");
});