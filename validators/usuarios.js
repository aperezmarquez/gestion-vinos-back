const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorRegister = [
    check('email').trim().escape().
        exists().trim().withMessage("El email es obligatorio").bail().
        notEmpty().withMessage("El email no puede estar vacío").bail().
        isEmail().withMessage("El email es incorrecto"),

    check('contraseña').trim().escape().
        exists().withMessage("La contraseña es obligatoria").bail().
        notEmpty().withMessage("La contraseña no puede estar vacía").bail().
        isLength({ max: 50, min: 3 }).withMessage("La contraseña tiene que tener entre 3 y 50 carácteres"),

    check('role').trim().escape().
        exists().withMessage("El role es obligatorio").bail().
        notEmpty().withMessage("El role no puede estar vacío").bail().
        isAlpha().withMessage("El role tiene que ser un texto"),

    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorLogin = [
    check('email').trim().escape().
        exists().trim().withMessage("El email es obligatorio").bail().
        notEmpty().withMessage("El email no puede estar vacío").bail().
        isEmail().withMessage("El email es incorrecto"),

    check('contraseña').trim().escape().
        exists().withMessage("La contraseña es obligatoria").bail().
        notEmpty().withMessage("La contraseña no puede estar vacía").bail().
        isLength({ max: 50, min: 3 }).withMessage("La contraseña tiene que tener entre 3 y 50 carácteres"),

    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorLogin, validatorRegister }
