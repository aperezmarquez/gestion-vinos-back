const { empleado } = require('../../models')

const updateEmpleado = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body

        try {
            const empleadoEncontrado = await empleado.findByPk(id)
            if (!empleadoEncontrado) {
                return res.status(404).json({ message: 'Empleado no encontrado' })
            }
        } catch (error) {
            return res.status(404).json({ message: 'Empleado no encontrado' })
        }
        
        try {
            const empleadoActualizado = await empleado.update(body, { where: { id } })

            return res.status(200).json({ message: 'Empleado actualizado correctamente' })
        } catch (error) {
            return res.status(400).json({ message: 'Error al actualizar empleado' })
        }

    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar empleado' })
    }
}

module.exports = { updateEmpleado }
