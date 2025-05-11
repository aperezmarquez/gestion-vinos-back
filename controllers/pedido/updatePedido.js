const { pedido } = require('../../models')

const updatePedido = async (req, res) => {
    const { id } = req.params
    const body = req.body

    if (!id || !body || body.length === 0) return res.status(400).json({ message: 'Faltan datos' })
    
    try {
        const result = await pedido.update(body, { where: { id } })
        
        if (!result) return res.status(400).json({ message: 'Error al actualizar el pedido' })
        
        return res.status(200).json({ message: 'Pedido actualizado' })
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el pedido' })   
    }
}

module.exports = { updatePedido }
