'use strict';

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'blog_posts',
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    BlogPost.hasMany(models.Category, {
      through: 'PostCategories',
      foreignKey: 'post_id',
      as: 'categories',
    });
  };

  return BlogPost;
};
