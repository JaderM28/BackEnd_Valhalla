// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {ventaGet, ventaPost, ventaPut, ventaDelete} = require('../controllers/ventas.controller')

route.get('/', ventaGet);
route.post('/', ventaPost);
route.put('/', ventaPut);
route.delete('/', ventaDelete);

// Exportacion

module.exports = route
