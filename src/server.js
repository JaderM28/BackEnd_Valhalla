
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
        this.authPath = '/ruta/auth',
        this.usuarioPath = '/ruta/usuarios',
        this.empleadoPath = '/ruta/empleados',
        this.clientePath = '/ruta/clientes',
        this.categoriaPath = '/ruta/categorias',
        this.servicioPath = '/ruta/servicios',
        this.ventaPath = '/ruta/ventas',
        this.rolPath = '/ruta/roles',
        this.reservaPath = '/ruta/reservas',
        this.conectarDB(),
        this.middlewares();//puentes de conexion html, front end y backend
        this.routes()
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor en el puerto: ',this.port)
        })
    }
    routes(){
        this.app.use(this.authPath, require('./routes/auth.route'))
        this.app.use(this.usuarioPath, require('./routes/usuarios.route'))
        this.app.use(this.empleadoPath, require('./routes/empleados.route'))
        this.app.use(this.clientePath, require('./routes/clientes.route'))
        this.app.use(this.categoriaPath, require('./routes/categorias.route'))
        this.app.use(this.servicioPath, require('./routes/servicios.route'))
        this.app.use(this.ventaPath, require('./routes/ventas.route'))
        this.app.use(this.rolPath, require('./routes/roles.route'))
        this.app.use(this.reservaPath, require('./routes/reservas.route'))
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
