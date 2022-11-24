//path module feature
const path = require('path');
console.log(path);

//path seperator
console.log(path.sep);  

//path join 
const filePath = path.join('/content/','subfolder','test.txt');
console.log(filePath);

//basename
const base = path.basename(filePath);
console.log(base);

//resolve
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);