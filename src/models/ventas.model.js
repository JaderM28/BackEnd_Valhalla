// Requerir Dependencia Mongoose

const {Schema, model} = require('mongoose')

const VentaSchema = Schema({
    ingresosEmpresa: {
        type: String,
        required: [true, 'El Campo \'ingresosEmpresa\' es Obligatorio'],
    },
    totalIngresos: {
        type: String,
        required: [true, 'El Campo \'totalIngresos\' es Obligatorio'],
    },
    clientesAtendidos:{
        type: String,
        required: [true, 'El Campo \'clientesAtendidos\' es Obligatorio'],
    },
}, {
    versionKey: false
})

// Exportacion

module.exports = model('Venta', VentaSchema)