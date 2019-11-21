'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    message: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.Thread, {foreignKey: 'threadId'})
    Post.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Post;
};