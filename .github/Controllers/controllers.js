const { v4: uuidv4 } = require('uuid');
const db = require('../models/productModel');

const getProducts = (req, res) => {
  let products = db.getAll();

  const { search, minPrice, maxPrice, page = 1, limit = 10 } = req.query;

  if (search) {
    products = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }
  if (minPrice) {
    products = products.filter(p => p.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    products = products.filter(p => p.price <= parseFloat(maxPrice));
  }

  const start = (page - 1) * limit;
  const paginated = products.slice(start, start + parseInt(limit));

  res.json(paginated);
};

const getProduct = (req, res) => {
  const product = db.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

const createProduct = (req, res) => {
  const newProduct = {
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price
  };
  const created = db.create(newProduct);
  res.status(201).json(created);
};

const updateProduct = (req, res) => {
  const updated = db.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Product not found' });
  res.json(updated);
};

const deleteProduct = (req, res) => {
  const deleted = db.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Product deleted', product: deleted });
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
