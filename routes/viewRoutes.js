const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Category Master page
router.get("/categories", (req, res) => {
  db.query("SELECT * FROM Category", (err, categories) => {
    res.render("category", { categories });
  });
});

// Product Master page with pagination
router.get("/products", (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let pageSize = 5;
  let offset = (page - 1) * pageSize;

  const sql = `
    SELECT 
      p.ProductId,
      p.ProductName,
      c.CategoryId,
      c.CategoryName
    FROM Product p
    JOIN Category c ON p.CategoryId=c.CategoryId
    LIMIT ? OFFSET ?`;

  db.query(sql, [pageSize, offset], (err, products) => {
    res.render("product", { products, page });
  });
});

module.exports = router;
