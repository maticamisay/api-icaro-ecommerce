const express = require("express");
const { findAllProducts } = require("../controllers/products.controllers");
const routerProducts = express.Router();

routerProducts.get("/", findAllProducts);

module.exports = routerProducts;
