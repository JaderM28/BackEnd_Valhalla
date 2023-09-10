// Importamos los Modelos 
const ClienteModelo = require('../models/clientes.model')

// Funcion Get 
const clienteGet = async(req, res) => {
    const clientes = await ClienteModelo.find();
    res.json({
        clientes
    });
}

// Funcion Post 
const clientePost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const clientes = new ClienteModelo(req.query);
        await clientes.save();
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    });
}

// Funcion Put
const clientePut = async(req, res) => {
    let messagge = 'Modificacion Exitosa';
    const {_id, nombres, apellidos, telefono, tipoDocumento, numeroDocumento, genero, direccion, fechaNacimiento} = req.query
    try{
        await ClienteModelo.updateMany(
            {_id:_id}, 
            {$set: {nombres: nombres,
                apellidos: apellidos,
                telefono: telefono,
                tipoDocumento: tipoDocumento,
                numeroDocumento: numeroDocumento,
                genero: genero,
                direccion: direccion,
                fechaNacimiento: fechaNacimiento}});
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Funcion Delete
const clienteDelete = async (req, res) => {
    const {_id} = req.query
    let messagge = 'Eliminacion Exitosa';
    try{
        const clientes = await ClienteModelo.deleteOne({_id: _id})

    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Exportacion
module.exports = {
    clienteGet,
    clientePost,
    clientePut,
    clienteDelete
}