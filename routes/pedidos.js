const express = require('express')
const router = express.Router()
const { getPedidos } = require('../controllers/pedido/getPedidos')
const { postPedido } = require('../controllers/pedido/postPedido')
const { updatePedido } = require('../controllers/pedido/updatePedido')

router.get('/', getPedidos)
router.post('/', postPedido)
router.patch('/:id', updatePedido)

module.exports = router
