var http = require('http');
var fs = require('fs');
http
    .createServer(function(req,res){
        // by this method it will send the original file size data at one which is not good 
        //we must send this data into samller chunk so we will use here createReadStream
        // const text = fs.readFileSync('./content/big.txt','utf-8');
        // res.end(text);
        //createReadstream
        const flieStream = fs.createReadStream('./content/big.txt','utf-8');
        flieStream.on('open',()=>{
            flieStream.pipe(res);
        })
        flieStream.on('error',(err)=>res.end(err));
    })
    .listen(5000)