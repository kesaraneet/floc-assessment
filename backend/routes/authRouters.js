import express from "express";
import { SignIn, VerifyToken } from "../controllers/authController.js";

const router = express.Router();

router.post("/", SignIn);
router.post("/verifyToken", VerifyToken);

export default {
  routes: router,
};
