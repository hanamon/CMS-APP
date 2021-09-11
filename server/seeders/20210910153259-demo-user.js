'use strict';
const bcrypt = require('bcrypt');

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
    // 비밀번호 암호화
    const hash = await bcrypt.hash('1234', 10);

    return queryInterface.bulkInsert('Users', [
      {
        user_login: 'hanamon',
        user_pass: hash,
        user_name: '하나몬',
        user_email: 'hana@co.kr',
        user_role: 0
      },
      {
        user_login: 'kimcoding',
        user_pass: hash,
        user_name: '김코딩',
        user_email: 'coding@co.kr',
        user_role: 1
      },
      {
        user_login: 'parkhacker',
        user_pass: hash,
        user_name: '박해커',
        user_email: 'hacker@co.kr',
        user_role: 5
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
