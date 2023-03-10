import jwt from "jsonwebtoken";
import config from "../config.js";

const authenJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).send("Unauthorized.");
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, config.jwt.access_token, async (err, decoded) => {
    if (err) return res.status(403).send("Forbidden.");
    req.user = decoded.username;
    req.permission = decoded.permission;
    next();
  });
};

export default authenJWT;
