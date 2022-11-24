//npm - global command, come with code
//npm --version

//local dependency - use it only in this particular projects
//npm i <packageName>

//global dependency  - use it in any project
//npm install  -g <packageName>
//sudo npm -g <packageName>(mac)

//package.json - manifest files( stores important info about project/package)
//manual approach (create package.json in the root, create properties etc )
//npm init (step by step, press enter to skip)
//npm init -y (everything default)


const _ = require('lodash');
const items = [1,[2,[3,[4]]]];
const newitems = _.flattenDeep(items);
console.log(newitems);