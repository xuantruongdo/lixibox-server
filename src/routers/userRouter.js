const express = require('express')
const userController = require('../controllers/userController')
const {verifyToken, verifyTokenAdmin} = require('../auth/index')
const router = express.Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/getProfile',verifyToken, userController.getProfile)

module.exports = router