"use strict";
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    slug: DataTypes.STRING,
    status: DataTypes.STRING,
    meta_description: DataTypes.STRING,
    author_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Post;
};