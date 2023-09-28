const User = require("../models/usuarios");

exports.findAllUsers = async (req, res) => {
  // await User.sync({ force: true }); // ¡Cuidado! ¡Esto reescribe la tabla!
  const productos = await User.findAll();
  res.json({ data: productos });
};

exports.createUser = async (req, res) => {
  try {
    const { isAdmin, name, surName, email, address, password, telephone } =
      req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const newUser = await User.create({
      isAdmin,
      name,
      surName,
      email,
      address,
      password, // ¡Importante! En un escenario real, asegúrate de hashear la contraseña antes de guardarla
      telephone,
    });

    res.json({ data: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};
