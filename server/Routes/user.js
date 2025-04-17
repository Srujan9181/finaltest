const express=require("express")
const userrouter=express.Router()
const usermodel=require("../models/user")
const bcrypt=require("bcrypt")

userrouter.use(express.json())

userrouter.get('/users',async function(req,res){
    const users=await usermodel.find()
    res.send(users)
})
userrouter.post("/login",async function(req,res){
    try{
    let {email,password}=req.body
    let user=await usermodel.findOne({email})
    
    let matched=await bcrypt.compare(password,user.password)
   
    if(user){
       
        if (matched){
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

userrouter.post('/signin',async function(req,res){
    const {firstname,lastname,email,password}=req.body
    securedpassword=await bcrypt.hash(password,10)
    try{
       
        let usercheck=await usermodel.findOne({email})
        if(usercheck){
            res.send("user alredy exists")
        }
        
        else{
            
            let newuser=usermodel({firstname,lastname,email,password:securedpassword})
            await newuser.save()
            res.status(201).send("new user created")
            
        }
    }
    catch(err){
        res.send(err)
    }

})
module.exports=userrouter