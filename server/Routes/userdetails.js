const express = require("express");
const userdetails = express.Router();
const userdetailsmodel = require("../models/userdetail");
const messagemodel = require("../models/messages");

userdetails.use(express.json());


userdetails.get('/get', async function (req, res) {
    let result = await userdetailsmodel.find();
    res.send(result);
});

// Main API
userdetails.post('/post', async function (req, res) {
    try {
        let { name, mobile, email, userid } = req.body;

        if (userid) {
            
            let result = await messagemodel.find({
                $or: [{ sender: userid }, { reciver: userid }]
            }).sort({ time: 1 });

            res.send({ result, message: "Fetched messages by userid", userid });
        } 
        else if (email) {
            
            let userdetailcheck = await userdetailsmodel.findOne({ email });

            if (userdetailcheck) {
                let sender = userdetailcheck.id;
                let result = await messagemodel.find({
                    $or: [{ sender: sender }, { reciver: sender }]
                }).sort({ time: 1 });

                res.send({ result, message: "Fetched messages for existing user", userid: sender });
            } else {
                let newuser = new userdetailsmodel({ name, mobile, email });
                await newuser.save();
                res.send({ message: "User created successfully", result: [], userid: newuser.id });
            }
        } 
        else {
            res.status(400).send({ message: "Invalid request" });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});


userdetails.post('/message', async function (req, res) {
    let { sender, message } = req.body;
    try {
        let newmessage = new messagemodel({
            sender: sender,
            message: message,
            reciver: "admin"
        });
        await newmessage.save();
        res.send({ result: "New message inserted into DB" });
    } catch (err) {
        res.send({ result: err });
    }
});

module.exports = userdetails;
