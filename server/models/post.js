'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    post_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20)
    },
    post_path: {
      allowNull: false,
      type: DataTypes.STRING(200),
      unique: true
    },
    post_title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    post_content: {
      type: DataTypes.TEXT('long')
    },
    post_type: {
      allowNull: false,
      type: DataTypes.STRING(20),
      defaultValue: 'post'
    },
    post_status: {
      allowNull: false,
      type: DataTypes.STRING(20),
      defaultValue: 'publish'
    },
    post_author: {
      allowNull: false,
      type: DataTypes.BIGINT(20)
    },
    post_created: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    post_updated: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Post',
    id: 'post_id',
    createdAt: 'post_created',
    updatedAt: 'post_updated'
  });
  return Post;
};