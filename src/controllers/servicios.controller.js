// Importamos los Modelos 
const ServicioModelo = require('../models/servicios.model')

// Funcion Get 
const servicioGet = async(req, res) => {
    const servicio = await ServicioModelo.find();
    res.json({
        servicio
    });
}

//Funcion Get ID
const servicioGetID = async (req, res) => {
    const { id } = req.params; 

    try {
        const servicioID = await ServicioModelo.findById(id);

        if (!servicioID) {
            return res.status(404).json({ mensaje: 'Servicio no encontrado' });
        }
        res.json({ servicioID });
    } catch (error) {
        console.error('Error al buscar Servicio por ID:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

// Funcion Post 
const servicioPost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const servicio = new ServicioModelo(req.body);
        await servicio.save();
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    });
}

// Funcion Put
const servicioPut = async(req, res) => {
    let messagge = 'Modificacion Exitosa';
    const {_id, nombre, duracion, precio, categoria, estado, descripcion} = req.body
    try{
        await ServicioModelo.updateMany(
            {_id:_id}, 
            {$set: {nombre: nombre,
                duracion: duracion,
                precio: precio,
                categoria: categoria,
                estado: estado,
                descripcion: descripcion,
            }});
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Funcion Delete
const servicioDelete = async (req, res) => {
    const {_id} = req.body
    let messagge = 'Eliminacion Exitosa';
    try{
        const servicio = await ServicioModelo.deleteOne({_id: _id})
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Exportacion
module.exports = {
    servicioGet,
    servicioPost,
    servicioPut,
    servicioDelete,
    servicioGetID
}
