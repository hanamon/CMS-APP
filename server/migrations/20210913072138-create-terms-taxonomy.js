'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Terms_Taxonomies', {
      terms_taxonomy_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20)
      },
      term_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
        references:{ model: 'Terms', key: 'term_id' }
      },
      terms_taxonomy_path: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      terms_taxonomy_description: {
        type: Sequelize.TEXT('long')
      },
      terms_taxonomy_created: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      terms_taxonomy_updated: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Terms_Taxonomies');
  }
};