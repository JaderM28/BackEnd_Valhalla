// Importamos los Modelos 
const UsuarioModelo = require('../models/usuarios.model')

// Funcion Get  Mostrar
const usuarioGet = async(req, res) => {
    const usuarios = await UsuarioModelo.find();
    res.json({
        usuarios
    });
}

// Funcion Post  Insertar
const usuarioPost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const usuario = new UsuarioModelo(req.query);
        await usuario.save();

    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    });
}

// Funcion Put Actualizar
const usuarioPut = async(req, res) => {
    let messagge = 'Modificacion Exitosa';
    const {_id, nombres, apellidos, username, correo,  rol, estado, password} = req.query
    try{
        await UsuarioModelo.updateMany(
            {_id:_id}, 
            {$set: {nombres: nombres,
                apellidos: apellidos,
                username: username,
                correo: correo,
                rol:rol,
                estado: estado,
                password: password}});
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}
// Funcion Delete Eliminar
const usuarioDelete = async (req, res) => {
    const {_id} = req.query
    let messagge = 'Eliminacion Exitosa';
    try{
        const usuario = await UsuarioModelo.deleteOne({_id: _id})
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}
// Exportacion
module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}