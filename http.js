const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/') res.end("welcome to home page")
    if(req.url==='/about') res.end("welcome to about page")
    else{
        res.end(`
            <h1>Page not found.</h1>
            <p>click one of following links to go back to home or about page.</p>
            <a href='/'>Home</a>
            <a href='/about>About</a>
        `)
    }
})

server.listen(3000)

// sdsdssddss 