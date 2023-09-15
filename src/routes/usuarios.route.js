// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {usuarioGet, usuarioGetID, usuarioPost, usuarioPut, usuarioDelete} = require('../controllers/usuarios.controller')

route.get('/', usuarioGet);
route.get('/id', usuarioGetID);
route.post('/', usuarioPost);
route.put('/', usuarioPut);
route.delete('/', usuarioDelete);

// Exportacion

module.exports = route
