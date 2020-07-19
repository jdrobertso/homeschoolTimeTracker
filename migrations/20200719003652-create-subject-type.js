'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SubjectTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      annualGoal: {
        type: Sequelize.INTEGER
      },
      weeklyGoal: {
        type: Sequelize.INTEGER
      },
      dailyGoal: {
        type: Sequelize.INTEGER
      },
      annualTotal: {
        type: Sequelize.INTEGER
      },
      weeklyTotal: {
        type: Sequelize.INTEGER
      },
      dailyTotal: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SubjectTypes');
  }
};