
// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {empleadoGet, empleadoPost, empleadoPut, empleadoDelete} = require('../controllers/empleados.controller')

route.get('/', empleadoGet);
route.post('/', empleadoPost);
route.put('/', empleadoPut);
route.delete('/', empleadoDelete);

// Exportacion

module.exports = route
