
// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {empleadoGet, empleadoPost, empleadoPut, empleadoDelete, empleadoGetID} = require('../controllers/empleados.controller')

route.get('/', empleadoGet);
route.get('/:id', empleadoGetID);
route.post('/', empleadoPost);
route.put('/', empleadoPut);
route.delete('/', empleadoDelete);

// Exportacion

module.exports = route
