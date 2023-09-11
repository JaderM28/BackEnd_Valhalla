// Importamos los Modelos 
const VentaModelo = require('../models/ventas.model')

// Funcion Get 
const ventaGet = async(req, res) => {
    const venta = await VentaModelo.find();
    res.json({
        venta
    });
}

// Funcion Post 
const ventaPost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const venta = new VentaModelo(req.body);
        await venta.save();
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    });
}

// Funcion Put
const ventaPut = async(req, res) => {
    let messagge = 'Modificacion Exitosa';
    const {_id, ingresosEmpresa, totalIngresos, clientesAtendidos} = req.body
    try{
        await VentaModelo.updateMany(
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
const ventaDelete = async (req, res) => {
    const {_id} = req.body
    let messagge = 'Eliminacion Exitosa';
    try{
        const venta = await VentaModelo.deleteOne({_id: _id})

    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Exportacion
module.exports = {
    ventaGet,
    ventaPost,
    ventaPut,
    ventaDelete
}
