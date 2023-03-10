import { db } from "../firebase.js";
import Product from "../models/product.js";

const addProduct = async (req, res, next) => {
  try {
    const data = req.body;
    await db.collection("products").doc().set(data);
    res.send("Product added.");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllProduct = async (req, res, next) => {
  try {
    const productsRef = db.collection("products");
    const products = await productsRef.get();
    let productArr = [];

    if (products.empty) {
      res.status(404).send("No product data.");
    }

    products.forEach((doc) => {
      let product = doc.data();
      productArr.push(
        new Product(doc.id, product.productTitleTH, product.productTitleEN, product.price, product.description, product.image)
      );
    });

    res.send(productArr);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await db.collection("products").doc(id);
    const data = await product.get();

    if (!data.exists) {
      res.status(404).send("Product not found.");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const product = await db.collection("products").doc(id);
    await product.update(data);

    res.send("Product updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("products").doc(id).delete();

    res.send("Product deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { addProduct, getAllProduct, getProduct, updateProduct, deleteProduct };
