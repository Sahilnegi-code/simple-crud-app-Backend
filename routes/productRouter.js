const productController = require('../controllers/productController');
const express = require('express');
const router = express.Router();

const {
    addProduct , getAllProduct , getOneProduct , updateProduct , deleteProduct , getPublishedProduct
} = require('../controllers/productController')
console.log('Sahil');
router.get('/addProduct',addProduct);
router.get('/allProducts', getAllProduct);
router.post('/published',getPublishedProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);
router.get('/:id',getOneProduct);
module.exports = router


