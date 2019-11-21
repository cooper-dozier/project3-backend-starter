'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    subject: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    forumId: DataTypes.INTEGER
  }, {});
  Thread.associate = function(models) {
    // associations can be defined here
  };
  return Thread;
};