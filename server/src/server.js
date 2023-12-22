const http = require('http');

require('dotenv').config();

const {mongoConnect}= require('./utils/mongo');

const app = require('./app');

const PORT = process.env.PORT || 8000

const server = http.createServer(app);

async function startServer(){
    await mongoConnect();
    server.listen(PORT,()=>(
      console.log(`listen to port ${PORT}`)
    )) 
}

startServer();
  