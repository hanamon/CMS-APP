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
    return queryInterface.bulkInsert('Posts', [
      {
        post_path: 'javascript-what-is-this',
        post_title: '[JavaScript] What is This?',
        post_content: 'JavaScript This Keyword is ...'
      },
      {
        post_path: 'javascript-var-let-const',
        post_title: '[JavaScript] 변수 선언 키워드',
        post_content: '자바스크립트 변수 선언 키워드 세 가지를 알아봅시다.'
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
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
