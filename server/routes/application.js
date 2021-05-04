const express = require('express');
require('dotenv').config();
let Application = require('../models/application.model');

var applicationRouter = express.Router();

applicationRouter.route("/add").post((req, res) => {
    const newApp = new Application({
        name: req.body.name,
        email: req.body.email,
        userId: req.body.userId,
        id: req.body.id,
        schoolName : req.body.schoolName,
        repsonses: req.body.repsonses,
        resume: req.body.resume
    });

    newApp.save();
})

applicationRouter.route("/find").get((req, res)=> {

})