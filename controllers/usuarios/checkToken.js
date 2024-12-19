const { usuarios } = require('../../models')
const handleError = require('../../utils/handleError')
const jwt = require('jsonwebtoken')

const checkToken = (req, res) => {
    try {
        const token = req.body.token

        if (!token) {
            handleError(res, 'Faltan datos', 400)
            return
        }

        const result = jwt.verify(token, process.env.JWT_SECRET, { algorithm: 'HS256' })

        if (!result.email) {
            handleError(res, 'El token no es valido', 400)
            return
        }

        res.status(200).send(true)
    } catch (error) {
        handleError(res, error, 400)
    }
}

module.exports = checkToken
