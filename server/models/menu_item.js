'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Menu_Item.init({
    menu_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20),
      references:{ model: 'Menus', key: 'id' }
    },
    menu_item_url: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    menu_item_label: {
      type: DataTypes.STRING(200)
    },
    menu_item_number: {
      allowNull: false,
      type: DataTypes.INTEGER(20)
    },
    menu_item_visibility: {
      allowNull: false,
      type: DataTypes.STRING(20),
      defaultValue: 'all'
    }
  }, {
    sequelize,
    modelName: 'Menu_Item',
  });
  return Menu_Item;
};