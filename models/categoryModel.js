const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM Category ORDER BY CategoryId ASC", callback);
};

exports.getById = (id, callback) => {
  db.query("SELECT * FROM Category WHERE CategoryId=?", [id], callback);
};

exports.create = (name, callback) => {
  db.query("INSERT INTO Category(CategoryName) VALUES (?)", [name], callback);
};

exports.update = (id, name, callback) => {
  db.query("UPDATE Category SET CategoryName=? WHERE CategoryId=?", [name, id], callback);
};

exports.remove = (id, callback) => {
  db.query("DELETE FROM Category WHERE CategoryId=?", [id], callback);
};
