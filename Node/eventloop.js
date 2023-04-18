// const {readFile,writeFile} = require('fs')

// console.log("before operation");
// // here the readFile is off loaded
// readFile('./data.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(result);
//     console.log("during operation");
// })
// console.log("after operation");

// // output of this .js file should be : before operation after operation this is data file content during operation

console.log("before starting");
setTimeout(()=>{
    console.log("during process");
},0)
console.log("at finished"); 