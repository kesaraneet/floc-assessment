import express from "express";
import { SignIn } from "../controllers/authController.js";

const router = express.Router();

router.post("/sign-in", SignIn);

export default {
  routes: router,
};
