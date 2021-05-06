// const express = require('express');
// require('dotenv').config();
let Application = require('../models/application');
// const mongoose = require('mongoose');
// const axios = require('axios');
// const { application } = require('express');
const router = require('express').Router();


// var applicationRouter = express.Router();

// applicationRouter.route("/add").post((req, res) => {
//     const newApp = new Application({
//         name: req.body.name,
//         email: req.body.email,
//         userId: req.body.userId,
//         id: req.body.id,
//         schoolName : req.body.schoolName,
//         repsonses: req.body.repsonses,
//         resume: req.body.resume
//     });

//     newApp.save();
// })

router.route('/apply').post((req, res) => {
    const newApp = new Application({
        name: req.body.name,
        email: req.body.email,
        userId: req.body.userId,
        id: req.body.id,
        schoolName : req.body.schoolName,
        repsonses: req.body.repsonses,
        resume: req.body.resume
    });
  
    newApp.save()
        .then(() => res.json(newExercise._id))    // im trying to make res get set to the object id fo the newly saved recipe (not sure how)
        .catch(err => console.log(err));
  
  });

router.route("/").get((req, res)=> {
    console.log("HERE");
    res.json("HELLO");
})


module.exports = router;
