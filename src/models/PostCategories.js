'use strict';

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      post_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'PostCategories',
      timestamps: false,
    }
  );

  return PostCategory;
};
