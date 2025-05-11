const express = require('express')
const router = express.Router()
const { getEmpleados } = require('../controllers/empleado/getEmpleados')
const { postEmpleado } = require('../controllers/empleado/postEmpleado')
const { updateEmpleado } = require('../controllers/empleado/updateEmpleado')

router.get('/', getEmpleados)
router.post('/', postEmpleado)
router.patch('/:id', updateEmpleado)

module.exports = router
