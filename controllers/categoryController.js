const Category = require("../models/categoryModel");

exports.getCategories = (req, res) => {
  Category.getAll((err, categories) => {
    if (err) return res.status(500).send(err);
    res.render("category", { categories, categoryToEdit: null });
  });
};

exports.addCategory = (req, res) => {
  Category.create(req.body.CategoryName, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect("/categories");
  });
};

exports.editCategoryPage = (req, res) => {
  const id = req.params.id;
  Category.getById(id, (err, category) => {
    if (err) return res.status(500).send(err);
    Category.getAll((err2, categories) => {
      if (err2) return res.status(500).send(err2);
      res.render("category", { categories, categoryToEdit: category[0] });
    });
  });
};

exports.updateCategory = (req, res) => {
  Category.update(req.params.id, req.body.CategoryName, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect("/categories");
  });
};

exports.deleteCategory = (req, res) => {
  Category.remove(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect("/categories");
  });
};
