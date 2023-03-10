import { db } from "../firebase.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

const SignIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let user;
    if (emailReg.test(username)) {
      user = await db.collection("users").where("email", "==", username).get();
    } else {
      user = await db.collection("users").where("username", "==", username).get();
    }

    if (user.empty) {
      return res.status(404).send("User not found.");
    }

    const data = user.docs[0].data();
    const hash = data.password;

    bcrypt.compare(password, hash, function (err, result) {
      if (result == true) {
        const token = jwt.sign({ username: username, email: data.email, permission: data.permission }, config.jwt.access_token, {
          expiresIn: "2h",
        });
        return res.send({ token: token, permission: data.permission });
      } else {
        return res.status(401).send(`Username/Email and Password doesn't match.`);
      }
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

// TODO: Implement Refresh Token
// const RefreshSignIn = (req, res) => {
//   const { token } = req.body;

//   if (token.empty) {
//     return res.status(401).send("Please Sign-in again.");
//   }

//   jwt.verify(token, config.jwt.access_token, async (err, decoded) => {
//     if (err) return res.status(403).send("Forbidden.");

//     const foundUser = await db.collection("users").where("username", "==", decoded.username).where("email", "==", decoded.email).get();
//     if (!foundUser) return res.status(401).send("Invalid token.");

//     return res.send({ token: token, permission: decoded.permission });
//   });
// };

export { SignIn };
