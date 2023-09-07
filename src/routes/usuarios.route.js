// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {usuarioGet, usuarioPost, usuarioPut, usuarioDelete} = require('../controllers/usuarios.controller')

route.get('/', usuarioGet);
route.post('/', usuarioPost);
route.put('/', usuarioPut);
route.delete('/', usuarioDelete);

// Exportacion

module.exports = route
