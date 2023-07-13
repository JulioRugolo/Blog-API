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
      tableName: 'post_categories',
      timestamps: false,
    }
  );

  PostCategory.associate = (models) => {
    PostCategory.belongsToMany(models.Category, {
      foreignKey: 'id',
      as: 'categories',
  });
  };

  return PostCategory;
};
