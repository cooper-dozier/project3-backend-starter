'use strict';
module.exports = (sequelize, DataTypes) => {
  const MessageItem = sequelize.define('MessageItem', {
    message: DataTypes.TEXT
  }, {});
  MessageItem.associate = function(models) {
    MessageItem.belongsTo(models.Thread, {foreignKey: 'threadId'})
    MessageItem.belongsTo(models.User, {foreignKey: 'userId'})
    // associations can be defined here
  };
  return MessageItem;
};