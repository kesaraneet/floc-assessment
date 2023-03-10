import express from "express";
import { SignIn } from "../controllers/authController.js";

const router = express.Router();

router.post("/", SignIn);

export default {
  routes: router,
};
