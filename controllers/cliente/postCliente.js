const { cliente } = require('../../models')

const postCliente = async(req, res) => {
    try {
        const body = req.body

        if (!body || body.length === 0) {return res.status(400).json({ message: 'No se recibieron datos' })}

        try {
            const result = await cliente.create(body)
            if (!result) return res.status(400).json({ message: 'Error al crear el cliente en base de datos' })

            return res.status(201).json({ message: 'Cliente creado' })
        } catch (error) {
            return res.status(500).json({ message: 'Error al crear el cliente en base de datos' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el cliente' })
    }
}

module.exports = { postCliente }
