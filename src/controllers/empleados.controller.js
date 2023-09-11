// Importamos los Modelos 
const EmpleadoModelo = require('../models/empleados.model')

// Funcion Get 
const empleadoGet = async(req, res) => {
    const empleados = await EmpleadoModelo.find();
    res.json({
        empleados
    });
}

// Funcion Post 
const empleadoPost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const empleados = new EmpleadoModelo(req.body);
        await empleados.save();
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    });
}

// Funcion Put
const empleadoPut = async(req, res) => {
    let messagge = 'Modificacion Exitosa';
    const {_id, nombres, apellidos, telefono, tipoDocumento, numeroDocumento, genero, direccion, fechaNacimiento} = req.body
    try{
        await EmpleadoModelo.updateMany(
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
const empleadoDelete = async (req, res) => {
    const {_id} = req.body
    let messagge = 'Eliminacion Exitosa';
    try{
        const empleados = await EmpleadoModelo.deleteOne({_id: _id})

    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Exportacion
module.exports = {
    empleadoGet,
    empleadoPost,
    empleadoPut,
    empleadoDelete
}
