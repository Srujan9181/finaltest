const mongoose=require("mongoose")
const schema=new mongoose.Schema(
    {
        firstname:{
            type:String
        },
        lastname:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:String
        }
    }
)

const user=mongoose.model('user',schema)
module.exports=user

