
// Requerir Dependencia Mongoose

const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    nombres: {
        type: String,
        required: [true, 'El Campo \'nombres\' es Obligatorio']
    },
    apellidos: {
        type: String,
        required: [true, 'El Campo \'apellidos\' es Obligatorio']
    },
    username: {
        type: String,
        required: [true, 'El Campo \'username\' es Obligatorio'],
        unique: true
    },
    correo: {
        type: String,
        required: [true, 'El Campo \'correo\' es Obligatorio'],
        unique: true
    },
    rol: {
        type: String,
        required: [true, 'El Campo \'rol\' es Obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El Campo \'estado\' es Obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El Campo \'password\' es Obligatorio'],
        minlength: [3, 'Debe tener minimo Tres caracteres']
    }
})

// Exportacion

module.exports = model('Usuario', UsuarioSchema)