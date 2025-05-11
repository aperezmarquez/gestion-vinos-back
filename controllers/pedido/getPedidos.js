const { pedido } = require('../../models')

const getPedidos = async (req, res) => {
    try {
        const pedidos = await pedido.findAll()
        if(!pedidos || pedidos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron pedidos' })
        }
        return res.status(200).json({ pedidos: pedidos})
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los pedidos' })
    }
}

module.exports = { getPedidos }
