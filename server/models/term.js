'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Term extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Term.init({
    term_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20)
    },
    term_name: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    term_path: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    term_created: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    term_updated: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Term',
    id: 'term_id',
    createdAt: 'term_created',
    updatedAt: 'term_updated'
  });
  return Term;
};