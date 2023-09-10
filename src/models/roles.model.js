const {Schema, model} = require('mongoose')

const RolesSchema = Schema({
    nombreRol: {
        type: String,
        required: [true, 'El Campo \'NombreRol\' es Obligatorio']
    },
    descripcion:{
        type: String,
        required: [true, 'El Campo \'Descripcion\' es Obligatorio']
    },
    permisos:{
        type: String,
        required: [true, 'El Campo \'Permisos\' es Obligatorio']
    },
    estado:{
        type: Boolean,
        default: true,
        required: [true, 'El Campo \'Estado\' es Obligatorio']
    },
},{
    versionKey: false
})
module.exports = model('Rol', RolesSchema)