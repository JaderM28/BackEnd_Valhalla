const {Schema, model} = require('mongoose')

const ReservaSchema = schema({
    nombreCliente: {
        type: String,
        required: [true, 'El Campo \'nombreCliente\' es Obligatorio']
    },
    categoria: {
        type: String,
        required: [true, 'El Campo \'Categoria\' es Obligatorio']
    },
    servicio: {
        type: String,
        required: [true, 'El Campo \'Servicio\' es Obligatorio']
    },
    precio: {
        type: String,
        required: [true, 'El Campo \'Precio\' es Obligatorio']
    },
    profesional: {
        type: String,
        required: [true, 'El Campo \'Profesional\' es Obligatorio']
    },
    fechaReserva: {
        type: String,
        required: [true, 'El Campo \'FechaReserva\' es Obligatorio']
    },
    horaReserva:{
        type: String,
        required: [true, 'El Campo \'HoraReserva\' es Obligatorio']
    },
    estado:{
        type: Boolean,
        default: true,
        required: [true, 'El Campo \'Estado\' es Obligatorio']
    },
},{
    versionKey: false
})
module.exports = model('Reserva', ReservaSchema)