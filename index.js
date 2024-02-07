const http = require('http');
const path = require('path');

const express = require('express');
const app = express()

app.use(express.static("proyecto"))

app.listen(3000,() => {
    console.log('esuchando el puerto 3000')
})

app.get('/', (request,response) => {
    response.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/login', (request,response) => {
    response.sendFile(path.resolve(__dirname,'login.html'))
})
