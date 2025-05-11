const express = require('express')
const router = express.Router()
const { getClientes } = require('../controllers/cliente/getClientes')
const { postCliente } = require('../controllers/cliente/postCliente')
const { updateCliente } = require('../controllers/cliente/updateCliente')

router.get('/', getClientes)
router.post('/', postCliente)
router.patch('/:id', updateCliente)

module.exports = router
