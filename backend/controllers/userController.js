import { db } from "../firebase.js";
import bcrypt from "bcrypt";

const createUser = async (req, res, next) => {
  try {
    const { username, password, email, role } = req.body;

    if (!username || !password || !email || !role) {
      res.status(400).send("Missing data.");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await db.collection("users").doc().set({
      username: username,
      password: hashPassword,
      email: email, // TODO: hash password
      role: role,
    });
    res.status(201).send("User created successfuly.");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { createUser };
