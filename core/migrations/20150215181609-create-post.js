"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.TEXT
      },
      content: {
        type: DataTypes.TEXT
      },
      slug: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      },
      meta_description: {
        type: DataTypes.STRING
      },
      author_id: {
        type: DataTypes.INTEGER // TODO: Add foreign key
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Posts").done(done);
  }
};
