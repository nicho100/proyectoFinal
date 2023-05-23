const { Router } = require("express")
const passport=require("passport")
const { getProducts } = require("../controller/product")
const routerLogins= Router()


routerLogins.get('/datos',async (req,res)=>{//si el usuario se loguea se muestra el listado de los productos
    if(req.session.username){
    const produc=await getProducts()
    const nombre=req.session.username
    res.render('form.ejs',{produc,nombre})
    return  
    }
    res.redirect("/login.html")
})

routerLogins.post('/signup',passport.authenticate("signup",{failureRedirect:"login.html"}),async (req,res)=>{//ruta para que el usuario se registre
    req.session.username=req.user.username
   res.redirect("/log/datos")
 })
 
 routerLogins.post('/login',passport.authenticate("login",{failureRedirect:"/login.html"}), async (req,res)=>{//ruta para que el usuario inicie sesion
     req.session.username=req.user.username
     
     res.redirect("/log/datos")
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