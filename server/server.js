const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const port = 7000;  // doesnt matter I think
const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB connected sucessfully");
})


const applicationRouter = require('./routes/application');
app.use('/application', applicationRouter);


// set up express server
app.get("/", (req,res) => {
    res.json("running here")
});

app.get("/test", (req,res) => {
    res.json("running test")
});

app.listen(port, ()=> {
    console.log('Server is running on http: ' + port)
});


