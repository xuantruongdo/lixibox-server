const express = require('express')
const orderController = require('../controllers/orderController')
const {verifyToken, verifyTokenAdmin} = require('../auth/index')
const router = express.Router()

router.post('/add-order', orderController.addOrder)

module.exports = router