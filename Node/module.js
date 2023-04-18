// function declaring syntax

// const <funnction_name> = (async/"") (<function_parameters>)=>{
//     <function_defination>
// }

// const names = ['a','b'];
// const ab = 'ab'
// const aa = 'dfdf'

// const sayhi = (name)=>{
//     console.log(`hello ${name}`);
// }

// sayhi('yash');
// sayhi(names[0]);
// sayhi(names[1]);
// sayhi(ab);
// sayhi(aa);

const names = require('./names')
const functions = require('./function')
console.log(functions);

require('./exp')
// sdsddsd

functions.sayHello(names.b)

// built in modules : OS , PATH , FS , HTTP