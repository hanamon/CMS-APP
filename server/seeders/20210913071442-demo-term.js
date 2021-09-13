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
    return queryInterface.bulkInsert('Terms', [
      {
        term_name: '미분류',
        term_path: 'uncategorized'
      },
      {
        term_name: '자바스크립트',
        term_path: 'javascript'
      },
      {
        term_name: '작품',
        term_path: 'artwork-category'
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
      return queryInterface.bulkDelete('Terms', null, {});
  }
};
