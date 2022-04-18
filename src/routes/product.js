const express = require('express')
const router = express.Router()
const product = require('../controllers/product.js')

router.get('/api/products', product.getProducts)
router.post('/api/users/admin/products', product.newProduct)
router.delete('/api/users/admin/products/:pid', product.deleteProduct)
router.put('/api/users/admin/products/:pid', product.updateProduct)

module.exports = router
