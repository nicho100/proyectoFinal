const {getDaos} = require("../dao")
const getUsers=async()=>{
    const dao=await getDaos()
    const users=await dao.getAllUsers()
    return users
}
            
const addUser=async(user)=>{
    const dao=await getDaos()
    if (user.name){
        const addedUser=await dao.addSingleUser(user)
        return addedUser
    }
        //throw new Error("Invalid user")
}
    //const delete= async(elementId)=>{
    //    let elementDelete= await this.model.deleteOne({_id:elementId})
    //    console.log(elementDelete)
    //}
const getById=async(id)=>{
    const dao=await getDaos()
    const user= await dao.getUserById(id)
    return user
}
//const update= async(elementId,key,newValue)=>{
 //   const update = {};
 //   update.$set[key] = newValue

  //  let elementUpdate= await this.model.findByIdAndUpdate(elementId,update)
   // console.log(elementUpdate)
//}

module.exports={getUsers,addUser,getById}