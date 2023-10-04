const express = require("express");
const {
  findAllProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controllers");
const routerProducts = express.Router();

routerProducts.get("/", findAllProducts);
routerProducts.get("/:id", findProductById);
routerProducts.post("/", createProduct);
routerProducts.put("/:id", updateProduct);
routerProducts.delete("/:id", deleteProduct);

module.exports = routerProducts;
