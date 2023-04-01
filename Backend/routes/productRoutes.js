const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController');
router.post('/product/create',productController.create_product);
module.exports = router;
