'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Forums', [
      {
        forum_name: 'Anime',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        forum_name: 'Oracle Cards',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        forum_name: 'Music',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        forum_name: 'Sports',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
