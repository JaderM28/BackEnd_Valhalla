
// Requerir Dependencia Mongoose

const {Schema, model} = require('mongoose')

const ClienteSchema = Schema({
    nombres: {
        type: String,
        required: [true, 'El Campo \'Nombres\' es Obligatorio']
    },
    apellidos: {
        type: String,
        required: [true, 'El Campo \'Apellidos\' es Obligatorio']
    },
    telefono: {
        type: String,
        required: [true, 'El Campo \'Telefono\' es Obligatorio'],
        unique: true
    },
    tipoDocumento: {
        type: String,
        required: [true, 'El Campo \'tipoDocumento\' es Obligatorio']
    },
    numeroDocumento: {
        type: String,
        required: [true, 'El Campo \'NumeroDocumento\' es Obligatorio'],
        unique: true
    },
    genero: {
        type: String,
        required: [true, 'El Campo \'Genero\' es Obligatorio'],
        enum: ['Masculino', 'Femenino']
    },
    direccion: {
        type: String,
        required: [true, 'El Campo \'Direccion\' es Obligatorio'],
    },
    fechaNacimiento: {
        type: Date,
        required: [true, 'El Campo \'FechaNacimiento\' es Obligatorio'],
    }
},{
    versionKey: false
})

// Exportacion

module.exports = model('Cliente', ClienteSchema)
