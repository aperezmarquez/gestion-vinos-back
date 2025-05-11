const { productos } = require('../../models')

const postProducto = (req, res) => {
    const body = req.body

    if (!body || Object.keys(body).length === 0) {
        res.status(400).send('Body vacio')
        return
    }

    productos.create(body).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(500).send(err)
    })
}

module.exports = { postProducto }
