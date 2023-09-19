// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {clienteGet, clientePost, clientePut, clienteDelete, clienteGetID} = require('../controllers/clientes.controller')

route.get('/', clienteGet);
route.get('/:id', clienteGetID);
route.post('/', clientePost);
route.put('/', clientePut);
route.delete('/', clienteDelete);

// Exportacion

module.exports = route
