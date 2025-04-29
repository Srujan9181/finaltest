const express=require("express")
let adminbotfetchrouter=express.Router()
adminbotfetchrouter.get("/",function(req,res){
    res.send("hello")
})


adminbotfetchrouter.post("/post",function(req,res){
    let body=req.body
})




module.exports=adminbotfetchrouter