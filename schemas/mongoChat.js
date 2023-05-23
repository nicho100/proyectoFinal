const mongoose= require("mongoose")

const chatSchema=new mongoose.Schema({//creo el esquema de los chats para mongo
    email:{type:String, required: true},
    message:{type:String,required:true},
    type:{type:String,required:true},
    time:{type:Date,default:Date.now},
})

module.exports=mongoose.model("chat",chatSchema)
