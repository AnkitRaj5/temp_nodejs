const {createReadStream} = require('fs');
//it will not able to read the full file because the file is really big and the buffer size 
// is limited to 64kb so we have some other method
// const stream = createReadStream('./content/big.txt');

const stream = createReadStream('../content/big.txt',{highWaterMark:90000, encoding:'utf-8'})

//default 64kb buffer limit
//last buffer reminder
//high water mark - control size
// const stream = createReadStream('./content/big.txt', {highwatermark: 90000});
// const stream = createReadStream('./content/big.txt',{endocing:'utf-8'});
stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>console.log(err));