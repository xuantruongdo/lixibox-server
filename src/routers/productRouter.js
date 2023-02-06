const express = require('express')
const productController = require('../controllers/productController')
const {verifyToken, verifyTokenAdmin} = require('../auth/index')
const router = express.Router()

router.get('/get-all-product', productController.getAllProduct)
router.post('/add-product',verifyToken, verifyTokenAdmin, productController.addProduct)
router.get('/filter-product-price/:fromPrice/:toPrice', productController.filterProductByPrice)
router.get('/filter-product-price/*', productController.getAllProduct)
router.get('/filter-product-status/:key', productController.filterProductByStatus)
router.get('/filter-product-status', productController.getAllProduct)

module.exports = router