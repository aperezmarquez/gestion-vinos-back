const { productos } = require('../../models')

const updateProducto = async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const {cantidad, precio_euros, precio_dolares} = req.body
        console.log(id)

        if (!cantidad && !precio_euros && !precio_dolares) return res.status(400).json({error: 'Faltan datos'})

        try {
            const producto = await productos.findByPk(id)
            if (!producto) return res.status(404).json({error: 'Producto no encontrado'})
        } catch (error) {
            res.status(500).json({error: "Error en la busqueda de producto" + error.message})
        }

        try {
            const result = await productos.update({cantidad, precio_euros, precio_dolares}, {where: {id: id}})
            return res.status(200).json(result)
        } catch (error) {
            res.status(500).json({error: "Error en la actualizacion del producto" + error.message})   
        }
    } catch (error) {
        res.status(500).json({error: "Error en la peticion" + error.message})
    }
}

module.exports = { updateProducto }
