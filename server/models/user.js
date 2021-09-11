'use strict';
const { 
  Model 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    user_login: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_pass: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_name: {
      allowNull: false,
      type: DataTypes.STRING(60)
    },
    user_email: {
      allowNull: false,
      type: DataTypes.STRING(100),
      unique: true
    },
    user_nickname: {
      type: DataTypes.STRING(60),
      unique: true
    },
    user_role: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 5
    },
    user_status: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};