// const fs = require('fs');
// fs.readFileSync();
// fs.writeFileSync();
// we can write this in a shorthand of es6 feature

// readfilesync
const{readFileSync, writeFileSync}= require('fs');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second);

//write file sync

writeFileSync('./content/result.txt',`here is the result of writefilesync : ${first}, ${second}`,{flag:'a'});
// {flag:'a'} it going to append the text to the existing content


// another file read function (Async)
const {readFile, writeFile} = require('fs');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
    }
    else
    console.log(`this output is from readFile : ${result}`);
})

// another file write function (Async)
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
    }
    const one = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
        }
        const two = result;
        writeFile('./content/result_async.txt',`here is the async write result : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(result);
            }
        })
    })
})