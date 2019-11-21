'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    subject: DataTypes.STRING
  }, {});
  Thread.associate = function(models) {
    // associations can be defined here
    Thread.hasMany(models.MessageItem, {foreignKey: 'threadId'})
    Thread.belongsTo(models.User, {foreignKey: 'userId'})
    Thread.belongsTo(models.Forum, {foreignKey: 'forumId'})
  };
  return Thread;
};