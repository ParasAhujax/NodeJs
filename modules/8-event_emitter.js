const eventEmitter = require('events');

const newEmitter = new eventEmitter;

newEmitter.on('response', (name, id) => { //response is any event like clicking a button
    console.log(`welcome ${name} your id is ${id}`);
})
newEmitter.on('response', () => {
    console.log(`voila!`);
})

newEmitter.emit('response', 'paras', '1'); //order of .on & .emit is important