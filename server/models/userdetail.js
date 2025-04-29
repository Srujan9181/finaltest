const mongoose=require("mongoose")

function getFormattedDateTime() {
    const now = new Date();
    
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${day}${month}${year}${hours}${minutes}${seconds}`;
  }

let schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    ticket:{
        type:String,
        default:getFormattedDateTime(Date.now)
    },
})

let userdetails=mongoose.model("userdetails",schema)

module.exports=userdetails