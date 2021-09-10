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
    return queryInterface.bulkInsert('Roles', [
      {
        role_number: 0,
        role_name: 'Administrator'
      },
      {
        role_number: 1,
        role_name: 'Demo Manager'
      },
      {
        role_number: 2,
        role_name: 'Author'
      },
      {
        role_number: 3,
        role_name: 'Editor'
      },
      {
        role_number: 4,
        role_name: 'Contributor'
      },
      {
        role_number: 5,
        role_name: 'Subscriber'
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
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
