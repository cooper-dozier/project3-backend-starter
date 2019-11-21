'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'tamakiki',
        email: 'randomperson@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'shooki_shooki',
        email: 'randomhamster@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Narut0e',
        email: 'randomfox@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'cowboybeepboop',
        email: 'princessofdarkness@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'xXnumbXx',
        email: 'yougotmelinkinaboutyou@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'potato_eboy',
        email: 'deadrat@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'babyTakashi',
        email: 'tomandjerry@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})

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
