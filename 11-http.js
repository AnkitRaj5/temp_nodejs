const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('here is our about page');
    }
    res.end(`
    <h1>Opps...</h1>
    <p>It looks like the page you are looking for is unavailable</p>
    <a href="/" >back home</a>
    `);
    
});
server.listen(5000);
