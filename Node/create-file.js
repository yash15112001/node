
const {writeFile} = require('fs').promises

const f = async()=>{
    try {
        for(let i=0;i<20000;++i){
            await writeFile('./data.txt',`hello ${i}\n`,{'flag':'a'})
        }        
    } catch (error) {
        console.log(error);
    }
}

f()
