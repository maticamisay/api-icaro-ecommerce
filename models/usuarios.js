const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

/**
 * @description This module defines the User model, which represents a user in the database.
 * It exports the User class, which extends the Sequelize Model class and defines the schema
 * of the "Users" table in the database.
 * @requires sequelize
 * @requires sequelize.Model
 * @requires sequelize.DataTypes
 * @exports User
 */
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    surName: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: true,
    },
    address: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(70),
      allowNull: true,
    },
    telephone: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    testing: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: false,
  }
);

module.exports = User;
