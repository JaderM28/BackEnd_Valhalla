const Usuario= require('../models/usuarios.model')
const bcrypt = require('bcrypt')

async function comparePassword(passwordForm,passwordBD){
    const result = await bcrypt.compare(passwordForm,passwordBD)
    return result
}


const login = async (req,res) =>{
    const {nombres,password} = req.body

    // verificar si existe el email
    const usuarios = await Usuario.findOne({nombres})
    try{
        if(!usuarios){//si no hay usuarios
            return res.status(400).json({
                msg: 'Usuario no encontrado'
            })
        }
        if (usuarios.estado == false){
            return res.status(400).json({
                msg: 'Usuario esta inactivo'
            })
        }

        resultado = await comparePassword(password,usuarios.password)

        if (resultado == true){
            return res.status(400).json({
                msg:'Bienvenido'
            })
        }else{
            return res.status(400).json({
                msg:'Usuario y/o password incorrecto'
            })
        }

    }catch(error){
        return res.status(400).json({
            msg:'Apreciado usuario contacte al admin'
        })
    }
}

module.exports ={
    login
}