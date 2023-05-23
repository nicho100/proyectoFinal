require("dotenv").config()

const urlMongo=process.env.URL
const puerto=process.env.PORT
const tiempo=process.env.COOKIETIME

module.exports={urlMongo,puerto,tiempo}
