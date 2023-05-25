require("../config/auth")
const { Router } = require("express")
const passport=require("passport")

const routerLogins= Router()

routerLogins.post('/signup',passport.authenticate("signup",{failureRedirect:"/login"}),async (req,res)=>{//ruta para que el usuario se registre
    req.session.username=req.user.username
   res.redirect("/prod/productos")
 })
 
 routerLogins.post('/login',passport.authenticate("login",{failureRedirect:"/login"}), async (req,res)=>{//ruta para que el usuario inicie sesion
     req.session.username=req.user.username
     
     res.redirect("/prod/productos")
 })
 
 routerLogins.get("/logout",async(req,res)=>{//ruta para cerrar sesion
     req.session.destroy(()=>{
         res.send("hasta luego")
     })
 })
 routerLogins.get("*",(req,res)=>{//si se busca una ruta no implementada da un warning
     const {url,method}=req
     res.send(`Ruta ${method} ${url} no implementada`)
 })
 
 module.exports={routerLogins}
