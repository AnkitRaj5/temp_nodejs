const {readFile, writeFile} = require('fs').promises;
//no need anymore after importing .promises 
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// this is copy of util.promisify this is how it work in background
// const getText = (path)=>{
//     return new Promise((resolve, reject) => {
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }
//it also works but downward solution is optimal
// getText('./content/firs.txt')
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err))

const start = async()=>{
    try {
        const first = await readFile('./content/first.txt','utf-8');
        const second = await readFile('./content/second.txt','utf-8');
        await writeFile('./content/result.txt',`This is awesome : ${first} ${second}`,{flag:'a'})
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
}
start()