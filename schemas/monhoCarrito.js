const mongoose= require("mongoose")

const carritoSchema=new mongoose.Schema({//creo el esquema de carritos para mongo
    email:{type:String, required: true},
    password:{type:String,required:true},
    date:{type:Date,default:Date.now},
    items:{type:Array,required:true},
    dirreccionEntrega:{type:String,require:true},
})

module.exports=mongoose.model("carrito",carritoSchema)