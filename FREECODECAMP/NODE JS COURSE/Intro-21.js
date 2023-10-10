// EVENTS EMITTER - CODE EXAMPLE/ ADDITIONAL INFO

// ON - LISTEN FOR AN EVENT 
// EMIT - EMIT AN EVENT 

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name , id)=>{
    console.log(`DATA RECIEVED USER ${name} with id:${id}`)
})
// YOU CAN MAKE MANY EVENT FUNCTION U WANT 
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})
// YOU CAN PASS THE  ARUGUMENT IN THE EMIT SECTION 
customEmitter.emit('response', 'john' , 34)