const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../../controllers/productController');

const validateProduct = require('../../middleware/validateProduct');
const auth = require('../../middleware/auth');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', auth, validateProduct, createProduct);
router.put('/:id', auth, validateProduct, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
