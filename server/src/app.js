const express = require('express');

const path = require('path')

const cors = require('cors');

const morgan = require('morgan')

const app = express();

app.use(cors({
    origin:"http://localhost:4200"
})) 

app.use(morgan('combined'));

app.use(express.json());

app.use(express.static(path.join(__dirname,'..','public','browser')))

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','browser','index.html'))
})

module.exports=app

