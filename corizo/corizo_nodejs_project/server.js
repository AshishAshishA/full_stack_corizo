const http = require('http');
const ejs = require('ejs');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


const app = express();

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})