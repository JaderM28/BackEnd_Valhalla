// Importamos los Modelos 
const ClienteModelo = require('../models/clientes.model')

// Funcion Get 
const clienteGet = async(req, res) => {
    const clientes = await ClienteModelo.find();
    res.json({
        clientes
    });
}

const clienteGetID = async (req, res) => {
    const { id } = req.params; 

    try {
        const clienteID = await ClienteModelo.findById(id);

        if (!clienteID) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }
        res.json({ clienteID });
    } catch (error) {
        console.error('Error al buscar cliente por ID:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

// Funcion Post 
const clientePost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const clientes = new ClienteModelo(req.body);
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
    const {_id, nombres, apellidos, telefono, tipoDocumento, numeroDocumento, genero, direccion, fechaNacimiento} = req.body
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
    const {_id} = req.body
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
    clienteDelete,
    clienteGetID
}
