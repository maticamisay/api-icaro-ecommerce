const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// MIDDLEWARE PARA CORS
app.use(cors());
// MIDDLEWARE PARA LOGS
app.use(morgan("dev"));
// MIDDLEWARE PARA PROCESAR JSON
app.use(express.json());

app.use("/api/productos", require("./routes/products.routes"));
app.use("/usuarios", require("./routes/users.routes"));

app.get("/api/productos", (req, res) => {
  setTimeout(() => {
    return res.json([
      {
        id: 1,
        nombre: "Producto 1",
        precio: 100,
        categoria: "Categoria 1",
      },
      {
        id: 2,
        nombre: "Producto 2",
        precio: 200,
        categoria: "Categoria 2",
      },
      {
        id: 3,
        nombre: "Producto 3",
        precio: 300,
        categoria: "Categoria 3",
      },
    ]);
  }, 2000);
});

app.post("/api/login", (req, res) => {
  if (req.body.username === "admin" && req.body.password === "admin") {
    return res.json({
      username: "admin",
      name: "Admin",
      role: "admin",
    });
  } else if (req.body.username === "user" && req.body.password === "user") {
    return res.json({
      username: "user",
      name: "User",
      role: "user",
    });
  } else {
    return res.status(400).json({ message: "Username or password is invalid" });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
