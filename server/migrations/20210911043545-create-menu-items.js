'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Menu_Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20)
      },
      menu_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
        references:{ model: 'Menus', key: 'id' }
      },
      menu_item_url: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      menu_item_label: {
        type: Sequelize.STRING(200)
      },
      menu_item_number: {
        allowNull: false,
        type: Sequelize.INTEGER(20)
      },
      menu_item_visibility: {
        allowNull: false,
        type: Sequelize.STRING(20),
        defaultValue: 'all'
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
    await queryInterface.dropTable('Menu_Items');
  }
};