const express = require('express')
const categoryController = require('../controllers/CategoryController')
const {verifyToken, verifyTokenAdmin} = require('../auth/index')
const router = express.Router()

router.get('/get-all-category', categoryController.getAllCategory)
router.post('/add-category', categoryController.addCategory)
router.get('/get-category', categoryController.getCategoryL1)
router.get('/get-category/:parent', categoryController.getCategoryL2)

module.exports = router