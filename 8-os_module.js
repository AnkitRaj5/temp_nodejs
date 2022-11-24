// os module features

const os = require('os');

//info about current user 
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds 
console.log(`The system uptime is ${os.uptime()} `);

// operating system info
const currOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currOs);