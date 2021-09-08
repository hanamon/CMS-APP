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
    return queryInterface.bulkInsert('Users', [
      {
        user_login: 'hanamon',
        user_pass: '1234',
        user_name: '하나몬',
        user_email: 'hana@co.kr'
      },
      {
        user_login: 'kimcoding',
        user_pass: '1234',
        user_name: '김코딩',
        user_email: 'coding@co.kr'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
