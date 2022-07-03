'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'vehicles',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        license_plate: {
          type: Sequelize.STRING,
          allowNull: false
        },
        brand: {
          type: Sequelize.STRING,
          allowNull: false
        },
        model: {
          type: Sequelize.STRING,
          allowNull: false
        },
        version: {
          type: Sequelize.STRING,
          allowNull: false
        },
        year: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        image: {
          type: Sequelize.STRING,
          allowNull: true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('vehicles')
  }
};
