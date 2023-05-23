const mongoose= require("mongoose")


const productSchema=new mongoose.Schema({//creo el esquema de productos para mongo
    name:{type:String, required: true},
    price:{type:Number,required:true},
    thumbnail:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
})


module.exports = mongoose.model("product",productSchema)

