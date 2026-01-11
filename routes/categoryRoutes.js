const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getCategories); // shows list + form
router.get("/edit/:id", categoryController.editCategoryPage);
router.post("/add", categoryController.addCategory);
router.post("/update/:id", categoryController.updateCategory);
router.post("/delete/:id", categoryController.deleteCategory);


module.exports = router;
