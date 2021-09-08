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
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};