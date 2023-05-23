const passport=require("passport")
const {Strategy:localStrategy}=require("passport-local")
const{hashSync,compareSync}=require("bcrypt")
const { getUsers, addUser } = require("../controller/user")
const { ContenedorArchivo } = require('../controller/contenedorArchivos')
const usuario= new ContenedorArchivo("productos")

passport.serializeUser(function(user,done){
    done(null,user.username)
})

passport.deserializeUser(async function (username,done){//veo si el usuario existe
    //const users=await getUsers()
    const usuarios=await usuario.getAll()
    //console.log(usuarios)
    //const userFound=users.find(user=>user.username===username)
    const userFound=usuarios.find(user=>user.username===username)
    done(null,userFound)  
})

passport.use("login",new localStrategy (async(username,password,done)=>{//si el usuario y la contraseña coinciden se concede el acceso
    //const users=await getUsers()
    const usuarios=await usuario.getAll()
    //const userFound=users.find(user=>user.username===username&&compareSync(password,user.password))
    const userFound=usuarios.find(user=>user.username===username&&compareSync(password,user.password))//compara el usuario y la contraseña encriptada
    if (userFound){
     done(null,userFound)
     return
    }
   done(null,false)
}))

passport.use("signup",new localStrategy(async(username,password,done)=>{//crea un usuario pero si ya existe da error
    //const users=await getUsers()
    const usuarios=await usuario.getAll()
    //const existentUser=users.find(user=>user.username===username)
    const existentUser=usuarios.find(user=>user.username===username)
  if(existentUser){
    done(new Error("el usuario ya existe"))
    return
}
const user={username,password:hashSync(password,10)}//encripta la contraseña
//await addUser(user)
await usuario.save(user)
done(null,user)
}))