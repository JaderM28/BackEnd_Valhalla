
// Requerir Dependencias Servidor

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')

// Utilizamos la Conexion

const {dbConnection} = require('./database/config')

// Crear Clase para el Servidor

class Server{

    constructor(){

        this.app = express(),
        this.port = process.env.PORT,
        this.usuarioPath = '/ruta/usuarios',
        this.conectarDB(),
        this.middlewares();
        this.routes()
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor en el puerto: ',this.port)
        })
    }

    routes(){
        this.app.use(this.usuarioPath, require('./routes/usuarios.route'))
    }

    middlewares() {
        this.app.use(cors()); // Habilita CORS para todas las rutas
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    }

    async conectarDB(){
        await dbConnection()
    }
}

// Exportacion

module.exports = Server
