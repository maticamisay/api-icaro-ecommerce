const express = require("express");
const {
  findAllUsers,
  createUser,
} = require("../controllers/users.controllers");
const routerUsers = express.Router();

routerUsers.get("/", findAllUsers);
routerUsers.post("/", createUser);

module.exports = routerUsers;
