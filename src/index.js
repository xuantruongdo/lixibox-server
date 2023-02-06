const express = require('express')
const app = express()
const {connect} = require('./db')
const routers = require('./routers')
var bodyParser = require('body-parser')
var cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.json())

connect()

routers(app)

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})