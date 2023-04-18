const {readFile,writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const f = async()=>{
    try {
        const data_1 = await readFile('./data.txt','utf8')
        const data_2 = await readFile('./data-writer.txt','utf8')
        await writeFile('./new-async-data.txt',`data to be written is : ${data_1} & ${data_2}.`,{flag:'a'}) 
        console.log(data_1,data_2) 
    } catch (error) {
        console.log(error);
    }
}

f()