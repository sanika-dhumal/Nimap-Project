const db = require("../config/db");

exports.getPaginated = (pageSize, offset, callback) => {
  const sql = `
    select p.ProductId, p.ProductName, c.CategoryId, c.CategoryName
    from Product p
    join Category c ON p.CategoryId=c.CategoryId
    order by p.ProductId ASC
    limit ? offset ?`;
  db.query(sql, [pageSize, offset], callback);
};

exports.getAllCategories = (callback) => {
  db.query("select * from Category", callback);
}; 

exports.getById = (id, callback) => {
  db.query("select * from Product where ProductId=?", [id], callback);
};

exports.create = (name, categoryId, callback) => {
  db.query("insert into Product(ProductName, CategoryId) VALUES (?, ?)", [name, categoryId], callback);
};

exports.update = (id, name, categoryId, callback) => {
  db.query("update Product set ProductName=?, CategoryId=? WHERE ProductId=?", [name, categoryId, id], callback);
};

exports.remove = (id, callback) => {
  db.query("delete from Product where ProductId=?", [id], callback);
};
