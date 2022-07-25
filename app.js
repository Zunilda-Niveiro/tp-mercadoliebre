const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.get('/', (req,res)=> res.sendFile(path.join(__dirname,"views","home.html")));
app.get('/register', (req,res)=> res.sendFile(path.join(__dirname,"views","register.html")));

app.listen(3030, ()=> console.log("servidor en linea"))