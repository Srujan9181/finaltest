const mongoose=require("mongoose")
let schema= new mongoose.Schema({
    sender:{
        type:String,
        required:true
    },
    reciver:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now(),
        

    }
})

let messages=mongoose.model("messages",schema)
module.exports=messages