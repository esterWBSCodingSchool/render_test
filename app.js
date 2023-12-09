const express = require('express');
const mongoose = require('mongoose');
const Student = require('./student');
require('dotenv').config(); 


const app = express();
const port = 3000;

const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
.then(()=> {
  console.log('Connected to MongoDB Atlas')

})
.catch(()=> {
  console.log('Unable to connect')

})

app.get('/', (req, res) => {
  res.send('Hello, Express with MongoDB!');
});


app.listen((port), ()=>{
    console.log(`Listening on port https://localhost${port}`)
})