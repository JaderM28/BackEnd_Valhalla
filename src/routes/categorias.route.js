// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {categoriaGet, categoriaPost, categoriaPut, categoriaDelete} = require('../controllers/categorias.controller')

route.get('/', categoriaGet);
route.post('/', categoriaPost);
route.put('/', categoriaPut);
route.delete('/', categoriaDelete);

// Exportacion

module.exports = route
