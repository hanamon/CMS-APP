'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Menu.init({
    menu_name: {
      allowNull: false,
      type: DataTypes.STRING(200),
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};