// Importamos los Modelos 
const ServicioModelo = require('../models/servicios.model')

// Funcion Get 
const servicioGet = async(req, res) => {
    const servicio = await ServicioModelo.find();
    res.json({
        servicio
    });
}

// Funcion Post 
const servicioPost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const servicio = new ServicioModelo(req.query);
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
    const {_id, nombre, duracion, precio, categoria, estado, descripcion} = req.query
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
    const {_id} = req.query
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
    servicioDelete
}