'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Threads', [
      {
        subject: 'How can the stressed negative utter a continued girl?',
        userId: 1,
        forumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'Will the employed independence breathe a devil?',
        userId: 2,
        forumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'The carriage dips every diagnosis.',
        userId: 3,
        forumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'A prospective inertia spends the overflow.',
        userId: 4,
        forumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'The sickening spiral reserves the protein under the mean overlap.',
        userId: 1,
        forumId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'The evident algorithm delights the temple.',
        userId: 2,
        forumId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'The dye fumes over a convenience.',
        userId: 3,
        forumId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'The bone fringes the comedy.',
        userId: 4,
        forumId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'Across a carrot fails an aesthetic gutter.',
        userId: 1,
        forumId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'The computer strains the granted crew near the blackmail.',
        userId: 2,
        forumId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'In a doe migrates the loving chairman.',
        userId: 3,
        forumId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: 'The lip wants a jerk beneath the textbook romantic.',
        userId: 4,
        forumId: 4,
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
