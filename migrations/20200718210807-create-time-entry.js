'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TimeEntries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      timeSpent: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      subjectId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TimeEntries');
  }
};