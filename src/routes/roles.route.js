// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {rolGet, rolPost, rolPut, rolDelete, rolGetID} = require('../controllers/roles.controller')

route.get('/', rolGet);
route.get('/:id', rolGetID);
route.post('/', rolPost);
route.put('/', rolPut);
route.delete('/', rolDelete);

// Exportacion

module.exports = route
