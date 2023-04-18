const os = require('os')

const data = {
    tm: os.totalmem(),
    fm: os.freemem(),
}
console.log(data.tm-data.fm);