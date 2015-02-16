"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.CHAR,
    role: DataTypes.INTEGER,
    bio: DataTypes.TEXT,
    avatar: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Posts, { foreignKey: 'user_id' });
      }
    }
  });
  return User;
};
