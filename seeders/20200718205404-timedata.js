'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SubjectTypes', [{
      name: 'CORE',
      annualGoal: 36000,
      weeklyGoal: 1080,
      dailyGoal: 270,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      name: 'Non-CORE',
      annualGoal: 24000,
      weeklyGoal: 720,
      dailyGoal: 180,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }], {});

    await queryInterface.bulkInsert('Subjects', [{
      name: 'Math',
      subjectTypeId: 1,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      name: 'Science',
      subjectTypeId: 1,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      name: 'Social Studies',
      subjectTypeId: 1,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      name: 'Language Arts',
      subjectTypeId: 1,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      name: 'Reading',
      subjectTypeId: 1,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      name: 'PE/ Sports',
      subjectTypeId: 2,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      name: 'Crafts',
      subjectTypeId: 2,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      name: 'Music',
      subjectTypeId: 2,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      name: 'Economics/Life Skills',
      subjectTypeId: 2,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('Subjects', null, {});
    await queryInterface.bulkDelete('SubjectTypes', null, {});
  }
};
