
// Requerir Dependencia Mongoose

const {Schema, model} = require('mongoose')

const ServicioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El Campo \'Nombre\' es Obligatorio']
    },
    duracion: {
        type: String,
        required: [true, 'El Campo \'Duracion\' es Obligatorio']
    },
    precio: {
        type: String,
        required: [true, 'El Campo \'Precio\' es Obligatorio']
    },
    categoria: {
        type: String,
        required: [true, 'El Campo \'Categoria\' es Obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El Campo \'Estado\' es Obligatorio']
    },
    descripcion:{
        type: String,
        required: [true, 'El Campo \'Descripcion\' es Obligatorio']
    }

},{
    versionKey: false
})

// Exportacion

module.exports = model('Servicio', ServicioSchema)