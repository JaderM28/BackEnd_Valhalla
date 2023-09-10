
// Requerir Dependencia Mongoose

const {Schema, model} = require('mongoose')

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El Campo \'Nombre\' es Obligatorio']
    },
    descripcion:{
        type: String,
        required: [true, 'El Campo \'Descripcion\' es Obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El Campo \'Estado\' es Obligatorio']
    },
    observaciones: {
        type: String,
        required: [true, 'El Campo \'Observaciones\' es Obligatorio']
    },
    codigoCategoria: {
        type: String,
        required: [true, 'El Campo \'CodigoCategoria\' es Obligatorio']
    },
},{
    versionKey: false
})

// Exportacion

module.exports = model('Categoria', CategoriaSchema)