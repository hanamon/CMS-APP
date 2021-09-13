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
        post_title: '[JavaScript] this란 무엇일까?',
        post_content: 'JavaScript This Keyword is ...',
        post_type: 'post',
        post_status: 'publish',
        post_author: 1
      },
      {
        post_path: 'javascript-var-let-const',
        post_title: '[JavaScript] 변수 선언 키워드',
        post_content: '자바스크립트 변수 선언 키워드 세 가지를 알아봅시다.',
        post_type: 'post',
        post_status: 'private',
        post_author: 1
      },
      {
        post_path: 'javascript-클로저란',
        post_title: '[JavaScript] 클로저란 무엇일까?',
        post_content: '자바스크립트 클로저에 대해 알아봅시다.',
        post_type: 'post',
        post_status: 'publish',
        post_author: 1
      },
      {
        post_path: 'javascript-스코프란',
        post_title: '[JavaScript] 스코프란?',
        post_content: '자바스크립트 스코프에 대해 알아봅시다.',
        post_type: 'post',
        post_status: 'publish',
        post_author: 1
      },
      {
        post_path: 'javascript-객체란',
        post_title: '[JavaScript] 객체란 무엇일까?',
        post_content: '자바스크립트 객체에 대해 알아봅시다.',
        post_type: 'post',
        post_status: 'publish',
        post_author: 2
      },
      {
        post_path: 'javascript-함수란',
        post_title: '[JavaScript] 함수란?',
        post_content: '자바스크립트 함수에 대해 알아봅시다.',
        post_type: 'post',
        post_status: 'private',
        post_author: 2
      },
      {
        post_path: '작품-1-밤산책',
        post_title: '밤산책',
        post_content: '작품 1 밤산책입니다.',
        post_type: 'artwork',
        post_status: 'publish',
        post_author: 1
      },
      {
        post_path: '작품-2-고양이',
        post_title: '고양이',
        post_content: '작품 2 고양이입니다.',
        post_type: 'artwork',
        post_status: 'private',
        post_author: 2
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
