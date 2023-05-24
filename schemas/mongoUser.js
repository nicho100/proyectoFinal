const mongoose= require("mongoose")

const userSchema=new mongoose.Schema({//creo el esquema de usuarios para mongo
    email:{type:String, required: true},
    password:{type:String,required:true},
    fullname:{type:String,required:true},
    phone:{type:String,required:true},
})

module.exports=mongoose.model("user",userSchema)

