'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.MessageItem, {foreignKey: 'userId'})
    User.hasMany(models.Thread, {foreignKey: 'userId'})
  };
  return User;
};