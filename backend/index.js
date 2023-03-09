const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const productRoutes = require("./routes/productRouters");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/product", productRoutes.routes);

app.listen(config.port, () => {
  console.log("Start server at port 8000.");
});
