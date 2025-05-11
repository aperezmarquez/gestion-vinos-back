const { pedido } = require('../../models')

const postPedido = async (req, res) => {
    try {
        const body = req.body
        if (!body) {
            return res.status(400).send({ message: 'No se recibieron datos en el body' })
        }
        
        const pedido_final = await pedido.create(body)
        
        if (!pedido_final) {
            return res.status(400).send({ message: 'Error al crear el pedido' })
        }

        return res.status(201).send(pedido_final)
    } catch (error) {
        return res.status(500).send({ message: 'Error al crear el pedido'})
    }
}

module.exports = { postPedido }
