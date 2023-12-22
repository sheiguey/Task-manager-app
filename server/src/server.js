const http = require('http');

const PORT = process.env.PORT || 8000

const server = http.createServer()

async function startServer(){

    server.listen(PORT,()=>(
      console.log(`listen to port ${PORT}`)
    ))
     
}

startServer();
  