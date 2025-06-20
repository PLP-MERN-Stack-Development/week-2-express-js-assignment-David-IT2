let products = [];

module.exports = {
  getAll: () => products,
  getById: (id) => products.find(p => p.id === id),
  create: (product) => {
    products.push(product);
    return product;
  },
  update: (id, updatedProduct) => {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      return products[index];
    }
    return null;
  },
  remove: (id) => {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      return products.splice(index, 1)[0];
    }
    return null;
  },
};
