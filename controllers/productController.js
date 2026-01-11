const Product = require("../models/productModel");

exports.getProducts = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 5;
  const offset = (page - 1) * pageSize;

  Product.getPaginated(pageSize, offset, (err, products) => {
    if (err) return res.status(500).send(err);
    Product.getAllCategories((err2, categories) => {
      if (err2) return res.status(500).send(err2);
      res.render("product", { products, categories, page, productToEdit: null });
    });
  });
};

exports.addProduct = (req, res) => {
  Product.create(req.body.ProductName, req.body.CategoryId, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect("/products");
  });
};

exports.editProductPage = (req, res) => {
  const id = req.params.id;
  Product.getById(id, (err, product) => {
    if (err) return res.status(500).send(err);
    Product.getAllCategories((err2, categories) => {
      if (err2) return res.status(500).send(err2);
      const page = 1;
      Product.getPaginated(5, 0, (err3, products) => {
        if (err3) return res.status(500).send(err3);
        res.render("product", {
          products,
          categories,
          page,
          productToEdit: product[0],
        });
      });
    });
  });
};

exports.updateProduct = (req, res) => {
  Product.update(req.params.id, req.body.ProductName, req.body.CategoryId, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect("/products");
  });
};

exports.deleteProduct = (req, res) => {
  Product.remove(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect("/products");
  });
};
