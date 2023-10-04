"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Productos", "createdAt");
    await queryInterface.removeColumn("Productos", "updatedAt");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Productos", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("Productos", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
};
