const express = require('express')
const router = express.Router()

const { signup, signin } = require('../controllers/usuarios')
const { validatorRegister, validatorLogin } = require('../validators')

router.post('/register', validatorRegister, signup)
router.post('/login', validatorLogin, signin)

module.exports = router
