const { usuarios } = require('../../models')
const handleError = require('../../utils/handleError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signin = async (req, res) => {
    try {
        const email = req.body.email
        const contraseña = req.body.contraseña

        if (!email || !contraseña){
            handleError(res, 'Faltan datos', 400)
            return
        }

        const usuario = await usuarios.findOne({where: {email: email}})
        if (!usuario){
            handleError(res, 'No se encontro el usuario', 404)
            return
        }

        bcrypt.compare(contraseña, usuario.contraseña, (err, data) => {
            if (err) {
                handleError(res, err, 500)
                return
            } else if (data) {
                const token = jwt.sign(
                    {id: usuario.id, email: usuario.email, role: usuario.role}, 
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '1h',
                        algorithm: 'HS256'
                    }
                )
                res.status(200).json({usuario: usuario, token: token})   
            } else {
                handleError(res, 'Contraseña incorrecta', 401)
            }
        })

    } catch (error) {
        handleError(res, error, 500)
    }
}

module.exports = signin
