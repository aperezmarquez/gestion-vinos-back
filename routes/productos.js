const express = require('express')
const router = express.Router()
const { postProducto } = require('../controllers/producto/postProducto')

router.post('/postProducto', postProducto)

module.exports = router
