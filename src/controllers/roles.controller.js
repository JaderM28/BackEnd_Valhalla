// Importamos los Modelos 
const RolModelo = require('../models/roles.model')

// Funcion Get 
const rolGet = async(req, res) => {
    const roles = await RolModelo.find();
    res.json({
        roles
    });
}

// Funcion Post 
const rolPost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const roles = new RolModelo(req.body);
        await roles.save();
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    });
}

// Funcion Put
const rolPut = async(req, res) => {
    let messagge = 'Modificacion Exitosa';
    const {_id, nombreRol, descripcion, permisos, estado} = req.body
    try{
        await RolModelo.updateMany(
            {_id:_id}, 
            {$set: {nombreRol:nombreRol,
            descripcion:descripcion,
            permisos:permisos,
            estado:estado
            }});
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Funcion Delete
const rolDelete = async (req, res) => {
    const {_id} = req.body
    let messagge = 'Eliminacion Exitosa';
    try{
        const roles = await RolModelo.deleteOne({_id: _id})

    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Exportacion
module.exports = {
    rolGet,
    rolPost,
    rolPut,
    rolDelete
}
