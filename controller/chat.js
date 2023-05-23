const {getDaoc} = require("../dao")
const getChats=async()=>{//trae todos los chats que hay en la base de datos
    const dao=await getDaoc()
    const chats=await dao.getAllChats()//se usa la implementacion del dao
    return chats
}
            
const addChat=async(chat)=>{//añade un chat a la base de datos
    const dao=await getDaoc()
    if (chat.email){
        const addedChat=await dao.addSingleChat(chat)
        return addedChat
    }
        throw new Error("Invalid chat")
}
    //const delete= async(elementId)=>{
    //    let elementDelete= await this.model.deleteOne({_id:elementId})
    //    console.log(elementDelete)
    //}
const getById=async(id)=>{//trae el chat de un usuario por id
    const dao=await getDaoc()
    const chat= await dao.getChatById(id)
    return chat
}
//const update= async(elementId,key,newValue)=>{
 //   const update = {};
 //   update.$set[key] = newValue

  //  let elementUpdate= await this.model.findByIdAndUpdate(elementId,update)
   // console.log(elementUpdate)
//}

module.exports={getChats,addChat,getById}