// Importamos los Modelos 
const CategoriaModelo = require('../models/categorias.model')

// Funcion Get 
const categoriaGet = async(req, res) => {
    const categoria = await CategoriaModelo.find();
    res.json({
        categoria
    });
}

const categoriaGetID = async (req, res) => {
    const { id } = req.params; 

    try {
        const categoriaID = await CategoriaModelo.findById(id);

        if (!categoriaID) {
            return res.status(404).json({ mensaje: 'Categoria no encontrado' });
        }
        res.json({ categoriaID });
    } catch (error) {
        console.error('Error al buscar Categoria por ID:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

// Funcion Post 
const categoriaPost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const categoria = new CategoriaModelo(req.body);
        await categoria.save();
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    });
}

// Funcion Put
const categoriaPut = async(req, res) => {
    let messagge = 'Modificacion Exitosa';
    const {_id, nombre, descripcion, estado, observaciones, codigoCategoria} = req.body
    try{
        await CategoriaModelo.updateMany(
            {_id:_id}, 
            {$set: {nombre: nombre,
                descripcion: descripcion,
                estado: estado,
                observaciones: observaciones,
                codigoCategoria: codigoCategoria,
            }});
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Funcion Delete
const categoriaDelete = async (req, res) => {
    const {_id} = req.body
    let messagge = 'Eliminacion Exitosa';
    try{
        const categoria = await CategoriaModelo.deleteOne({_id: _id})

    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Exportacion
module.exports = {
    categoriaGet,
    categoriaPost,
    categoriaPut,
    categoriaDelete,
    categoriaGetID
}
