const Producto = require("../models/index").Producto;

exports.findAllProducts = async (req, res) => {
  const productos = await Producto.findAll();
  res.json({ data: productos });
};

exports.findProductById = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ data: producto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar el producto" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { nombre, precio, categoria } = req.body;

    if (!nombre || !precio || !categoria) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    const newProduct = await Producto.create({
      nombre,
      precio,
      categoria,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { nombre, precio, categoria } = req.body;
    const producto = await Producto.findByPk(req.params.id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    producto.nombre = nombre;
    producto.precio = precio;
    producto.categoria = categoria;

    await producto.save();

    res.json({ data: producto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    await producto.destroy();

    res.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
