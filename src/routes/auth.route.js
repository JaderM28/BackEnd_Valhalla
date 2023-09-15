// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {login} = require('../controllers/auth.controller')

route.post('/', login);

// Exportacion

module.exports = route
