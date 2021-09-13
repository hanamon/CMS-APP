'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Setting.init({
    setting_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20)
    },
    setting_name: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    setting_value: {
      allowNull: false,
      type: DataTypes.TEXT('long')
    },
    setting_created: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    setting_updated: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Setting',
    id: 'setting_id',
    createdAt: 'setting_created',
    updatedAt: 'setting_updated'
  });
  return Setting;
};