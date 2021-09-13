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
    return queryInterface.bulkInsert('Terms_Taxonomies', [
      {
        term_id: 1,
        terms_taxonomy_path: 'category',
        terms_taxonomy_description: '카테고리가 없는 글'
      },
      {
        term_id: 2,
        terms_taxonomy_path: 'category',
        terms_taxonomy_description: '자바스크립트에 관련된 모든 글.'
      },
      {
        term_id: 1,
        terms_taxonomy_path: 'artwork-category',
        terms_taxonomy_description: '카테고리가 없는 글'
      },
      {
        term_id: 3,
        terms_taxonomy_path: 'artwork-category',
        terms_taxonomy_description: '작품과 관련된 모든 글'
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
      return queryInterface.bulkDelete('Terms_Taxonomies', null, {});
  }
};
