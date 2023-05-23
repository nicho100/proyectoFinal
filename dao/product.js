const Product=require("../schemas/mongoProducto")
const  mongoose  = require("mongoose")
const { urlMongo } = require("../config/enviorment")
class MongoProduct{
    async connect(){
        await mongoose.connect(urlMongo)
    }
 getAllProducts=async()=>{//se traen todos los productos de la base de datos
    const products=await Product.find({})
    return products
}
 addSingleProduct =async(product)=>{//se añade un producto a la base de datos
    const newProduct=new Product(product)
    await newProduct.save()
    return product
}
 getProductById=async(id)=>{//se trae un porducto por id de la base de datos
    const product=await Product.getById(id)
    return product
}

}

module.exports= MongoProduct