const { Router } = require("express")
const { getProducts } = require("../controller/product")
const routerProducts= Router()

routerProducts.get('/productos',async (req,res)=>{//si el usuario se loguea se muestra el listado de los productos
    if(req.session.username){
    const produc=await getProducts()
    res.send(produc)
    console.log("te logeaste exitosamente")
   
    return  
    }
})

module.exports={routerProducts}