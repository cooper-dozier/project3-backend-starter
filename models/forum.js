'use strict';
module.exports = (sequelize, DataTypes) => {
  const Forum = sequelize.define('Forum', {
    forum_name: DataTypes.STRING
  }, {});
  Forum.associate = function(models) {
    // associations can be defined here
    Forum.hasMany(models.Thread, {foreignKey: 'forumId'})
  };
  return Forum;
};