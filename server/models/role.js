'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Role.init({
    role_number: {
      allowNull: false,
      type: DataTypes.INTEGER(20),
      unique: true
    },
    role_name: {
      allowNull: false,
      type: DataTypes.STRING(20),
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};