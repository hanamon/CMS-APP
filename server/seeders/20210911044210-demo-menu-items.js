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
        menu_item_label: 'Home',
        menu_item_number: 0,
        menu_item_visibility: 'all'
      },
      {
        menu_id: 1,
        menu_item_url: '/blog',
        menu_item_label: 'Blog',
        menu_item_number: 1,
        menu_item_visibility: 'all'
      },
      {
        menu_id: 1,
        menu_item_url: '/project',
        menu_item_label: 'Project',
        menu_item_number: 3,
        menu_item_visibility: 'all'
      },
      {
        menu_id: 1,
        menu_item_url: '/artwork',
        menu_item_label: 'Work',
        menu_item_number: 2,
        menu_item_visibility: 'all'
      },
      {
        menu_id: 1,
        menu_item_url: '/about',
        menu_item_label: 'About',
        menu_item_number: 4,
        menu_item_visibility: 'all'
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
