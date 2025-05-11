const { cliente } = require("../../models")

const updateCliente = async (req, res) => {
    const { id } = req.params
    const body = req.body
    
    try {
        const clienteUpdated = await cliente.update(body, {
            where: { id }
        })

        return res.status(200).json(clienteUpdated)
    } catch (error) {
        return res.status(500).json({ message: "Error al actualizar el cliente" })
    }
}

module.exports = { updateCliente }
