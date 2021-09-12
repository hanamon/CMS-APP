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
    return queryInterface.bulkInsert('Menu_Items', [
      {
        menu_id: 1,
        menu_item_url: '/',
        menu_item_label: '홈',
        menu_item_number: 0,
        menu_item_exact: true,
        menu_item_visibility: 'all'
      },
      {
        menu_id: 1,
        menu_item_url: '/blog',
        menu_item_label: '블로그',
        menu_item_number: 1,
        menu_item_exact: true,
        menu_item_visibility: 'all'
      },
      {
        menu_id: 1,
        menu_item_url: '/project',
        menu_item_label: '프로젝트',
        menu_item_number: 2,
        menu_item_exact: true,
        menu_item_visibility: 'all'
      },
      {
        menu_id: 1,
        menu_item_url: '/artwork',
        menu_item_label: '작품',
        menu_item_number: 3,
        menu_item_exact: true,
        menu_item_visibility: 'all'
      },
      {
        menu_id: 1,
        menu_item_url: '/about',
        menu_item_label: '소개',
        menu_item_number: 4,
        menu_item_exact: true,
        menu_item_visibility: 'all'
      },
      {
        menu_id: 1,
        menu_item_url: '/login',
        menu_item_label: 'login',
        menu_item_number: 5,
        menu_item_exact: true,
        menu_item_visibility: 'logout'
      },
      {
        menu_id: 1,
        menu_item_url: '/signup',
        menu_item_label: 'signup',
        menu_item_number: 6,
        menu_item_exact: true,
        menu_item_visibility: 'logout'
      },
      {
        menu_id: 1,
        menu_item_url: '/logout',
        menu_item_label: 'logout',
        menu_item_number: 7,
        menu_item_exact: true,
        menu_item_visibility: 'login'
      },
      {
        menu_id: 1,
        menu_item_url: '/mypage',
        menu_item_label: 'mypage',
        menu_item_number: 8,
        menu_item_exact: false,
        menu_item_visibility: 'login'
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
    return queryInterface.bulkDelete('Menu_Items', null, {});
  }
};
