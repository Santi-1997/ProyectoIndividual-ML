const express = require('express');
const app = express();
const path = require ('path');

app.use(express.static('public'));


app.get('/', (req,res) =>{
    res.sendFile (path.resolve('views/home.html'))
});

app.get('/registro', (req,res) =>{
    res.sendFile (path.resolve('views/register.html'))
});

app.get('/login', (req,res) =>{
    res.sendFile (path.resolve('views/login.html'))
});



app.listen(3030, () => console.log ('esto fue exitoso'));
