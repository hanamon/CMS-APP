'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Term_Relationships', {
      post_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
        references:{ model: 'Posts', key: 'post_id' }
      },
      term_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
        references:{ model: 'Terms', key: 'term_id' }
      }
    });
    await queryInterface.addConstraint('Term_Relationships', {
      fields: ['post_id', 'term_id'],
      type: 'primary key',
      name: 'term_relationship_id'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Term_Relationships');
  }
};