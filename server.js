const { puerto, urlMongo } = require("./config/enviorment")
const express=require('express')
const {createServer}= require('http')
const app= express()
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
const server=createServer(app)
const socketIo = require('socket.io')
const { addProduct, getProducts } = require("./controller/product")
const io =socketIo(server)
const producto={
    name:"ventilador",
    price:20,
    thumbnail:"link",
    description:"3 velocidades",
    category:"casa"
}

const productosz=async()=> {await addProduct(producto)
const productos= await getProducts();
console.log(productos)
}


productosz()


server.listen(puerto,(req,res)=>(console.log("funciona"))) 