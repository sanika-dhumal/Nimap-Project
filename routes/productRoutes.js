const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getProducts); // list + form + dropdown
router.get("/edit/:id", productController.editProductPage);
router.post("/add", productController.addProduct);
router.post("/update/:id", productController.updateProduct);
router.post("/delete/:id", productController.deleteProduct);


module.exports = router;
