const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const app = express()
const clinics = require('./routes/clinics')

mongoose.connect('mongodb://localhost/docbook')
    .then(()=>{
        console.log('Connected to MongoDB...')
    })
    .catch(err=>console.error('Could not connect to MongoDB.. ',err ))

    app.use(cors());
app.use(express.json());
app.use('/api/clinics',clinics);


//PORT

const port = process.env.port || 3000

app.listen(port,()=>console.log(`Listening on Port ${port}....`))