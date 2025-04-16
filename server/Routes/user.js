const express=require("express")
const userrouter=express.Router()
const usermodel=require("../models/user")


userrouter.use(express.json())

userrouter.get('/users',async function(req,res){
    const users=await usermodel.find()
    res.send(users)
})
userrouter.post("/login",async function(req,res){
    try{
    let {email,password}=req.body
    let user=await usermodel.findOne({email})
    if(user){
        if (password===usermodel.password){
            res.status(200).send("login sucessfull")
        }
        else{
            res.send("wrong password")
        }
    }
    else{
        res.send("user doesn't exit")
    }
    }
    catch(err){
        res.send(err)
    }

})
userrouter.post('/signup',async function(req,res){
    let {email,password}=req.body
    let usercheck=await usermodel.findOne({email})
    let userpassword=usercheck.password
    if (usercheck){
        if(userpassword===password){
            res.status(200).send("login in sucesfull")
        }
        else{
            res.send(404).send("password error")
        }
        
    }
})
userrouter.post('/signin',async function(req,res){
    try{
        const {firstname,lastname,email,password}=req.body
        let usercheck=await usermodel.findOne({email})
        if(usercheck){
            res.send("user alredy exists")
        }
        else{
            let newuser=usermodel({firstname,lastname,email,password})
            newuser.save()
            res.status(201).send("new user created")
        }
    }
    catch(err){
        res.send(err)
    }

})
module.exports=userrouter