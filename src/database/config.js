// Requerir Dependencia Mongoose

const mongoose = require('mongoose');


// Conectar Base de Datos

const dbConnection = async () => {
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log('Base de Datos Conectada con Exito')
    }catch(error){
        console.log(error)
    }
    
}

// Exportacion 

module.exports = {dbConnection}