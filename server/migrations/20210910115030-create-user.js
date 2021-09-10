'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20)
      },
      user_login: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_pass: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      user_email: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true
      },
      user_nickname: {
        type: Sequelize.STRING(60),
        unique: true
      },
      user_role: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 5,
        references:{ model: 'Roles', key: 'role_number' }
      },
      user_status: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    await queryInterface.dropTable('Users');
  }
};