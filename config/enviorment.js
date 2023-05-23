require("dotenv").config()
//traigo el link de mongo de .env y lo exporto

const urlMongo=process.env.URL//uso dotenv para guardar el link de la base de datos
const puerto=process.env.PORT

//uso minimist para configurar el puerto


module.exports={urlMongo,puerto}