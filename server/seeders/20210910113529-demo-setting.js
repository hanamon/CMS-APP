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
    return queryInterface.bulkInsert('Settings', [
      {
        setting_name: 'site_url',
        setting_value: 'http://localhost:3000'
      },
      {
        setting_name: 'site_name',
        setting_value: '나의 블로그'
      },
      {
        setting_name: 'site_description',
        setting_value: '즐거운 나의 블로그 생활'
      },
      {
        setting_name: 'admin_email',
        setting_value: 'admin@co.kr'
      },
      {
        setting_name: 'date_format',
        setting_value: 'Y년 F j일'
      },
      {
        setting_name: 'time_format',
        setting_value: 'a g:i'
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
      return queryInterface.bulkDelete('Settings', null, {});
  }
};
