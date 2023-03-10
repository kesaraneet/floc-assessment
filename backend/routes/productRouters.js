import express from "express";
import { addProduct, getAllProduct, getProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import authenJWT from "../middleware/authenJWT.js";
import authorizeJWT from "../middleware/authorizeJWT.js";

const router = express.Router();

router.use(authenJWT);

router.get("/", authorizeJWT("read"), getAllProduct);
router.get("/:id", authorizeJWT("read"), getProduct);
router.post("/", authorizeJWT("read", "write"), addProduct);
router.put("/:id", authorizeJWT("read", "write"), updateProduct);
router.delete("/:id", authorizeJWT("read", "write"), deleteProduct);

export default {
  routes: router,
};
