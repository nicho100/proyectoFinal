require("../config/auth")
const { Router } = require("express")
const passport=require("passport")
const { getProducts } = require("../controller/product")
const routerLogins= Router()


routerLogins.get('/productos',async (req,res)=>{//si el usuario se loguea se muestra el listado de los productos
    if(req.session.username){
    const produc=await getProducts()
    res.send(produc)
    console.log("te logeaste exitosamente")
   
    return  
    }
    res.redirect("/login")
})

routerLogins.post('/signup',passport.authenticate("signup",{failureMessage:"hubo un error"}),async (req,res)=>{//ruta para que el usuario se registre
    req.session.username=req.user.username
    console.log(req.body)
   res.redirect("/prod/productos")
 })
 
 routerLogins.post('/login',passport.authenticate("login",{failureMessage:"hubo un error"}), async (req,res)=>{//ruta para que el usuario inicie sesion
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
