//importaciones
const { routerLogins } = require("./routes/logins");
const { routerProducts } = require("./routes/productos");
const { puerto, urlMongo,tiempo} = require("./config/enviorment");
//configuracion express
const express=require('express');
const {createServer}= require('http')
const expressSession=require("express-session")
const app= express()
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
const server=createServer(app)
//configuracion sesion y passport
const mongoStore=require("connect-mongo")
const passport=require("passport")

//configuracion sockets
const socketIo = require('socket.io');

const io =socketIo(server)

app.use(expressSession({//se crea una cookie
    store: mongoStore.create({mongoUrl:urlMongo}),
    secret:"secreto",
    resave: true,
    saveUninitialized:true,
    cookie:{maxAge:parseInt(tiempo)},
    rolling:true,
}))

app.use(passport.initialize())//se usa passport para controlar los logins de los usuariosS
app.use(passport.session())

const producto={
    name:"ventilador",
    price:20,
    thumbnail:"link",
    description:"3 velocidades",
    category:"casa"
}

app.use('/',routerLogins)
app.use('/prod',routerProducts)

server.listen(puerto,(req,res)=>(console.log("funciona"))) 
