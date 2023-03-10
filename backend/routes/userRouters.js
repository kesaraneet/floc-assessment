import express from "express";
import { createUser } from "../controllers/userController.js";
import authenJWT from "../middleware/authenJWT.js";
import authorizeJWT from "../middleware/authorizeJWT.js";

const router = express.Router();

router.use(authenJWT);

router.post("/", authorizeJWT("admin"), createUser);

export default {
  routes: router,
};
