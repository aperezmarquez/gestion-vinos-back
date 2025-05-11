const { empleado } = require('../../models')

const postEmpleado = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({ error: 'No se han recibido datos' })
    }

    try {
        const empleado_creado = await empleado.create(body)
        if (!empleado_creado) {
            return res.status(400).json({ error: 'Error al crear el empleado' })
        }
        return res.status(201).json(empleado_creado)
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el empleado' })
    }
}

module.exports = { postEmpleado }
