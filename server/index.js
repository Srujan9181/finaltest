const express=require("express")
const app=express()
const userrouter=require("./Routes/user")
const mongoose=require("mongoose")
const cors=require("cors")
app.use(cors())


app.use('/user',userrouter)
try{
    mongoose.connect("mongodb+srv://srujan9181:wyZrpCCCnrH02JMR@cluster0.lht0rkc.mongodb.net/")
    console.log("db connected")
}
catch(err){
    console.log(err)
}

app.listen(5353,function(){
    console.log("http://localhost:5353/")
})