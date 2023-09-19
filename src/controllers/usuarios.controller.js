// Importamos los Modelos 
const UsuarioModelo = require('../models/usuarios.model')
const bcrypt = require('bcrypt')

// Funcion Get  Mostrar
const usuarioGet = async(req, res) => {
    const usuarios = await UsuarioModelo.find();
    res.json({
        usuarios
    });
}

const usuarioGetID = async (req, res) => {
    const { id } = req.params; 

    try {
        const usuarioID = await UsuarioModelo.findById(id);

        if (!usuarioID) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.json({ usuarioID });
    } catch (error) {
        console.error('Error al buscar usuario por ID:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};
    

// Funcion Post  Insertar
const usuarioPost = async(req, res) => {
    let messagge = 'Insercion Exitosa';

    try{
        const usuarios = new UsuarioModelo(req.body);
        const salt = 10 //vueltas
        usuarios.password = bcrypt.hashSync(req.body.password,salt)
        await usuarios.save();

    }catch(error){
        console.error('Error al insetar usuarios:', error)
        res.status(500).json({msg: 'Error interno del servidor'})
    }
    res.json({
        msg: messagge
    });
}

// Funcion Put Actualizar
const usuarioPut = async(req, res) => {
    let messagge = 'Modificacion Exitosa';
    const {_id, nombres, apellidos, username, correo,  rol, estado, password} = req.body
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
    const {_id} = req.body
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
    usuarioDelete,
    usuarioGetID
}
