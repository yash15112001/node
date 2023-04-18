const EventEmitter = require('events')
const myEmitter = new EventEmitter()


// myEmitter.on('res',()=>{
//     console.log('res');
// })
// myEmitter.on('res',()=>{
//     console.log('res-copy');
// })
// myEmitter.on('res2',()=>{
//     console.log('res2');
// })
// myEmitter.on('ttt',()=>{
//     console.log('ttt');
// })
// myEmitter.emit('res')
// myEmitter.emit('res')
// myEmitter.emit('ttt')


myEmitter.on('par-cb',(name,age)=>{
    console.log(`my name is : ${name} and my age is : ${age}`);
})
myEmitter.on('par-cb',()=>{
    console.log(`this is parameter less output`);
})
myEmitter.emit('par-cb','yash',21)