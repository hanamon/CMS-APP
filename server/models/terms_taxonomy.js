'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Terms_Taxonomy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Terms_Taxonomy.init({
    terms_taxonomy_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20)
    },
    term_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20),
    },
    terms_taxonomy_path: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    terms_taxonomy_description: {
      type: DataTypes.TEXT('long')
    },
    terms_taxonomy_created: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    terms_taxonomy_updated: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Terms_Taxonomy',
    id: 'terms_taxonomy_id',
    createdAt: 'terms_taxonomy_created',
    updatedAt: 'terms_taxonomy_updated'
  });
  return Terms_Taxonomy;
};