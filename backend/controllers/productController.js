import { db } from "../firebase.js";
import Product from "../models/product.js";

const addProduct = async (req, res) => {
  try {
    const product = req.body;
    await db.collection("products").doc().set(product);
    res.send("Product added.");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await db.collection("products").get();
    let productArr = [];

    if (products.empty) {
      res.status(404).send("No product.");
    }

    products.forEach((doc) => {
      let product = doc.data();
      productArr.push(new Product(doc.id, product.title_th, product.title_en, product.price, product.description, product.image));
    });

    res.send(productArr);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await db.collection("products").doc(id).get();

    if (!product.exists) {
      res.status(404).send("Product not found.");
    } else {
      res.send(product.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updated_product = req.body;

    const product = await db.collection("products").doc(id);
    await product.update(updated_product);

    res.send("Product updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.collection("products").doc(id).delete();

    res.send("Product deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { addProduct, getAllProduct, getProduct, updateProduct, deleteProduct };
