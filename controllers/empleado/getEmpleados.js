const { empleado } = require("../../models")

const getEmpleados = async (req, res) => {
    try {
        const empleados = await empleado.findAll()
        
        if (!empleados || empleados.length === 0) {
            return res.status(404).json({ message: "No se encontraron empleados" })
        }

        return res.status(200).json({ empleados: empleados})

    } catch (error) {
        return res.status(500).json({ message: "Error al obtener empleados" })
    }
}

module.exports = { getEmpleados }
