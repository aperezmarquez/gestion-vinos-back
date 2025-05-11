const express = require('express')
const router = express.Router()
const { postProducto } = require('../controllers/producto/postProducto')
const { updateProducto } = require('../controllers/producto/updateProducto')
const { getProductos } = require('../controllers/producto/getProductos')

router.get('/', getProductos)
router.post('/postProducto', postProducto)
router.patch('/update/:id', updateProducto)

module.exports = router
