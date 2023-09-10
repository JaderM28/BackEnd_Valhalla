// Importamos los Modelos 
const ReservaModelo = require('../models/reservas.model')

// Funcion Get 
const reservaGet = async(req, res) => {
    const reserva = await ReservaModelo.find();
    res.json({
        reserva
    });
}

// Funcion Post 
const reservaPost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const reserva = new ReservaModelo(req.query);
        await reserva.save();
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    });
}

// Funcion Put
const reservaPut = async(req, res) => {
    let messagge = 'Modificacion Exitosa';
    const {_id, ingresosEmpresa, totalIngresos, clientesAtendidos} = req.query
    try{
        await ReservaModelo.updateMany(
            {_id:_id}, 
            {$set: {ingresosEmpresa: ingresosEmpresa,
                totalIngresos: totalIngresos,
                clientesAtendidos: clientesAtendidos
            }});
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Funcion Delete
const reservaDelete = async (req, res) => {
    const {_id} = req.query
    let messagge = 'Eliminacion Exitosa';
    try{
        const reserva = await ReservaModelo.deleteOne({_id: _id})

    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Exportacion
module.exports = {
    reservaGet,
    reservaPost,
    reservaPut,
    reservaDelete
}