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
        role_name: '관리자',
        role_path: 'Administrator'
      },
      {
        role_number: 1,
        role_name: '데모 메니저',
        role_path: 'Demo Manager'
      },
      {
        role_number: 2,
        role_name: '작성자',
        role_path: 'Author'
      },
      {
        role_number: 3,
        role_name: '편집자',
        role_path: 'Editor'
      },
      {
        role_number: 4,
        role_name: '기부자',
        role_path: 'Contributor'
      },
      {
        role_number: 5,
        role_name: '구독자',
        role_path: 'Subscriber'
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
