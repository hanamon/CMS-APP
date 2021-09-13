'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Term_Relationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Term_Relationship.init({
    post_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20),
      primaryKey:true
    },
    term_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20),
      primaryKey:true
    }
  }, {
    sequelize,
    modelName: 'Term_Relationship',
    timestamps: false
  });
  return Term_Relationship;
};