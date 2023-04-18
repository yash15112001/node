const {createReadStream} = require('fs')

// const stream = createReadStream('./data.txt')
const stream = createReadStream('./data.txt',{highWaterMark:100050}) // to manipulate the size of buffer
// const stream = createReadStream('./data.txt',{encoding:'utf8'}) // to read in the text format 

stream.on('data',(res)=>{
    console.log(res);
})

stream.on('error',(err)=>{
    console.log(err);
})