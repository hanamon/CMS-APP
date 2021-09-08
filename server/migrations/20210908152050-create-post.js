'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20)
      },
      post_path: {
        allowNull: false,
        type: Sequelize.STRING(200),
        unique: true
      },
      post_title: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      post_content: {
        type: Sequelize.TEXT('long')
      },
      post_type: {
        allowNull: false,
        type: Sequelize.STRING(20),
        defaultValue: 'post'
      },
      post_status: {
        allowNull: false,
        type: Sequelize.STRING(20),
        defaultValue: 'publish'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};