// Requerir Dependencia DotEnv

require('dotenv').config()
const Server = require('./server')

// Instanciar Clase Server

const servidor = new Server()

// Utilizar Servidor

servidor.listen()