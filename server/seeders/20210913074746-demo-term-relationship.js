'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Term_Relationships', [
      {
        post_id: 1,
        term_id: 2
      },
      {
        post_id: 2,
        term_id: 2
      },
      {
        post_id: 3,
        term_id: 2
      },
      {
        post_id: 4,
        term_id: 1
      },
      {
        post_id: 5,
        term_id: 1
      },
      {
        post_id: 6,
        term_id: 1
      },
      {
        post_id: 7,
        term_id: 3
      },
      {
        post_id: 8,
        term_id: 1
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      return queryInterface.bulkDelete('Term_Relationships', null, {});
  }
};
