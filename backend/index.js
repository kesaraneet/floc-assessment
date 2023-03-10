import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRouters from "./routes/productRouters.js";
import userRouters from "./routes/userRouters.js";
import authRouters from "./routes/authRouters.js";
import config from "./config.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/product", productRouters.routes);
app.use("/user", userRouters.routes);
app.use("/auth", authRouters.routes);

app.listen(config.port, () => {
  console.log("Start server at port 8000.");
});
