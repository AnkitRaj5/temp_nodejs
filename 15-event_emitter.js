const eventEmitter = require('events');
const customEvent = new eventEmitter();

customEvent.on('response',(name , id)=>{
    console.log(`data recieved user: ${name} with id ${id}`);
})
customEvent.on('response',()=>{
    console.log(`some other logic event`);
})
//you must emit the event after the on 
customEvent.emit('response','ankit' ,22);
