// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {reservaGet, reservaPost, reservaPut, reservaDelete} = require('../controllers/reservas.controller')

route.get('/', reservaGet);
route.post('/', reservaPost);
route.put('/', reservaPut);
route.delete('/', reservaDelete);

// Exportacion

module.exports = route