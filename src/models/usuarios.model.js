
// Requerir Dependencia Mongoose

const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    nombres: {
        type: String,
        required: [true, 'El Campo \'Nombres\' es Obligatorio']
    },
    apellidos: {
        type: String,
        required: [true, 'El Campo \'Apellidos\' es Obligatorio']
    },
    username: {
        type: String,
        required: [true, 'El Campo \'Username\' es Obligatorio'],
        unique: true
    },
    correo: {
        type: String,
        required: [true, 'El Campo \'Correo\' es Obligatorio'],
        unique: true
    },
    rol: {
        type: String,
        required: [true, 'El Campo \'Rol\' es Obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El Campo \'Estado\' es Obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El Campo \'Password\' es Obligatorio'],
        minlength: [3, 'Debe tener minimo Tres caracteres']
    }
}, {
    versionKey: false
})

// Exportacion

module.exports = model('Usuario', UsuarioSchema)