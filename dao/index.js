const MongodaoProd= require("./product")
const MongodaoUser= require("./user")
const MongodaoChat= require("./chat")
let mongodao=undefined
const getDao=async()=>{//conecta a la base de datos
    if(!mongodao){
        mongodao=new MongodaoProd()
        await mongodao.connect()
    }
    return mongodao
}

let mongodao2=undefined
const getDaos=async()=>{//conecta a la base de datos
    if(!mongodao2){
        mongodao2=new MongodaoUser()
        await mongodao2.connect()
    }
    return mongodao2
}

let mongodao3=undefined
const getDaoc=async()=>{//conecta a la base de datos
    if(!mongodao3){
        mongodao3=new MongodaoChat()
        await mongodao3.connect()
    }
    return mongodao3
}

module.exports={getDao,getDaos,getDaoc}
