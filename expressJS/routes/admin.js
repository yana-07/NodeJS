const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const adminController = require('../controllers/admin');

const router = express.Router();

// Route handling middlewares
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

module.exports = router;