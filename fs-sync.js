// const {readFileSync,writeFileSync} = require('fs')
const fs = require('fs')
const data = fs.readFileSync('./data.txt','utf8')
fs.writeFileSync('./data-writer.txt',`data written in this file is being read from file : data.txt and the contents of the data.txt file is : ${data}.`)
