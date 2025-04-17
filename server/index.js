const express=require("express")
const app=express()
const userrouter=require("./Routes/user")
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()
app.use(cors())
app.use(express.json())

const PORT=process.env.PORT
const db=process.env.db


app.use('/user',userrouter)
try{
    mongoose.connect(db)
    console.log("db connected")
}
catch(err){
    console.log(err)
}

app.listen(PORT,function(){
    console.log(`http://localhost:${PORT}/user/users}`)
})