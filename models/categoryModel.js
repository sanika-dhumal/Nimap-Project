const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("select * FROM Category order BY CategoryId ASC", callback);
};

exports.getById = (id, callback) => {
  db.query("select * from Category where CategoryId=?", [id], callback);
};

exports.create = (name, callback) => {
  db.query("insert into Category(CategoryName) values (?)", [name], callback);
};

exports.update = (id, name, callback) => {
  db.query("update Category SET CategoryName=? where CategoryId=?", [name, id], callback);
};

exports.remove = (id, callback) => {
  db.query("delete FROM Category where CategoryId=?", [id], callback);
};
