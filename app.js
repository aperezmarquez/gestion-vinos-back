const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes'))

const port = process.env.PORT || 3500
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

module.exports = app
