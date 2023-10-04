"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Producto.init(
    {
      nombre: DataTypes.STRING,
      precio: {
        type: DataTypes.DECIMAL(10, 2),
      },
      categoria: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Producto",
      timestamps: false,
    }
  );
  return Producto;
};
