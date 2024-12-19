const { usuarios } = require('../../models')
const handleError = require('../../utils/handleError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try {
        const body = req.body
        
        if (!body) {
            handleError(res, 'El body no puede estar vacio', 400)
            return
        }

        const saltRounds = 5

        const email_minusculas = body.email.toLowerCase()
        const usuario = await usuarios.findOne({ where: { email: email_minusculas } })
        
        if (usuario) {
            handleError(res, 'El usuario ya existe', 400)
            return
        }
        console.log(email_minusculas)
        let usuario_final = { ...body }

        usuario_final.contraseña = bcrypt.hashSync(body.contraseña, saltRounds)
        usuario_final.email = email_minusculas

        console
        const token = jwt.sign(
            {id: usuario_final.id, email: usuario_final.email, role: usuario_final.role},
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
                algorithm: 'HS256'
            }
        )
        console.log(token)

        const result = await usuarios.create(usuario_final)

        if (!result) {
            handleError(res, 'Error al crear el usuario', 500)
            return
        }

        res.status(200).json({usuario: usuario_final, token: token})
    } catch (error) {
        handleError(res, error, 400)
    }
}

module.exports = signup
