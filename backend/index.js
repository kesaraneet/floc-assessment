import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRouters from "./routes/productRouters.js";
import userRouters from "./routes/userRouters.js";
import authRouters from "./routes/authRouters.js";
import config from "./config.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use("/product", productRouters.routes);
app.use("/user", userRouters.routes);
app.use("/auth", authRouters.routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});

app.listen(config.port, () => {
  console.log("Start server at port 8000.");
});
