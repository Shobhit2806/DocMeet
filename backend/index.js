const mongoose = require('mongoose');
const express = require('express');

const app = express()
const clinics = require('./routes/clinics')
const appointmenttimes = require('./routes/appointmenttimes')




mongoose.connect('mongodb://localhost/docbook')
    .then(()=>{
        console.log('Connected to MongoDB...')
    })
.catch(err=>console.error('Could not connect to MongoDB.. ',err ))


app.use(express.json());
app.use('/api/clinics',clinics);
app.use('/api/appointmenttimes',appointmenttimes);


//PORT

const port = process.env.port || 3000

app.listen(port,()=>console.log(`Listening on Port ${port}....`))