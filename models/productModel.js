const db = require("../config/db");

exports.getPaginated = (pageSize, offset, callback) => {
  const sql = `
    SELECT p.ProductId, p.ProductName, c.CategoryId, c.CategoryName
    FROM Product p
    JOIN Category c ON p.CategoryId=c.CategoryId
    ORDER BY p.ProductId ASC
    LIMIT ? OFFSET ?`;
  db.query(sql, [pageSize, offset], callback);
};

exports.getAllCategories = (callback) => {
  db.query("SELECT * FROM Category", callback);
}; 

exports.getById = (id, callback) => {
  db.query("SELECT * FROM Product WHERE ProductId=?", [id], callback);
};

exports.create = (name, categoryId, callback) => {
  db.query("INSERT INTO Product(ProductName, CategoryId) VALUES (?, ?)", [name, categoryId], callback);
};

exports.update = (id, name, categoryId, callback) => {
  db.query("UPDATE Product SET ProductName=?, CategoryId=? WHERE ProductId=?", [name, categoryId, id], callback);
};

exports.remove = (id, callback) => {
  db.query("DELETE FROM Product WHERE ProductId=?", [id], callback);
};
