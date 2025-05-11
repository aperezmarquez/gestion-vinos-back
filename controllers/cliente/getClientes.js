const { cliente } = require('../../models')

const getClientes = async(req, res) => {
    try {
        try {
            const clientes = await cliente.findAll()
            if (!clientes || clientes.length === 0) {
                return res.status(404).json({error: "No se encontraron clientes"})
            }

            return res.status(200).json({clientes: clientes})
        } catch (error) {
            return res.status(500).json({error: "Error en la busqueda de clientes en base de datos"})
        } 
    } catch (error) {
        return res.status(500).json({error: "Error en la busqueda de clientes"})
    }
}

module.exports = { getClientes }
