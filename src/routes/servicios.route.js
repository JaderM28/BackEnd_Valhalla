// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {servicioGet, servicioPost, servicioPut, servicioDelete} = require('../controllers/servicios.controller')

route.get('/', servicioGet);
route.post('/', servicioPost);
route.put('/', servicioPut);
route.delete('/', servicioDelete);

// Exportacion

module.exports = route
