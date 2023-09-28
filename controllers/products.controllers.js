const Producto = require("../models/productos");

exports.findAllProducts = async (req, res) => {
  const productos = await Producto.findAll();
  res.json({ data: productos });
};
