const express = require("express");
const { addProduct, getAllProduct, getProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = {
  routes: router,
};
