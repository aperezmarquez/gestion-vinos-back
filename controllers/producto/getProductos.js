const { productos } = require('../../models')

const getProductos = async (req, res) => {
    try {
        const productosData = await productos.findAll();

        if (!productosData || productosData.length === 0) {
            return res.status(404).send({ message: 'No se encontraron productos' });
        }

        return res.status(200).send({ productos: productosData });
    } catch (error) {
        console.error('Error en getProductos:', error);
        return res.status(500).send({ message: 'Error al obtener los productos' });
    }
}

module.exports = {getProductos}
