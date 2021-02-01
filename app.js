const express = require('express');
const app = express();
const path = require ('path');
const bodyParser = require ('body-parser');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', (req,res) =>{
    res.sendFile (path.resolve('views/home.html'))
});

app.get('/register', (req,res) =>{
    res.sendFile (path.resolve('views/register.html'))
});

app.get('/login', (req,res) =>{
    res.sendFile (path.resolve('views/login.html'))
});

app.post('/register',(req,res)=>{
    res.send(req.body)
});

app.post('/',(req,res)=>{
    res.send(req.body)
});


app.listen(3030, () => console.log ('esto fue exitoso'));
