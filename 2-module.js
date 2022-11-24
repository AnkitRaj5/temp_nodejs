//module
//require
const data = require('./5-alternate_module')
const name = require('./4-module')
const sayHi = require('./3-module')
sayHi(name.ankit)
sayHi(name.gando)
sayHi(name.thakur)
sayHi(name.mandal_ji)
console.log(data);
console.log(data.items);
console.log(data.singlePerson);
console.log(data.singlePerson.name);
console.log('   ------- MIND BLOWING -------- ');
require('./6-mind_blowing_module')