const { BlogPost, Category, PostCategory } = require('../models');

const validateRequiredFields = (data) => {
  const { title, content, categoryIds } = data;
  return title && content && categoryIds;
};

const validateCategoryIds = (categoryIds, categories) => categoryIds
.every((id) => categories.includes(id));

const createBlogPost = async (userId, data) => {
  const { title, content } = data;
  const published = new Date();
  const updated = new Date();

  return BlogPost.create({
    title,
    content,
    userId,
    published,
    updated,
  });
};

const linkCategoriesToPost = async (postId, categoryIds) => {
  const postCategoryPromises = categoryIds.map((categoryId) =>
    PostCategory.create({ postId, categoryId }));

  await Promise.all(postCategoryPromises);
};

const createPost = async (userId, data) => {
  const categoriesData = await Category.findAll();
  const categories = categoriesData.map((item) => item.id);

  if (!validateRequiredFields(data)) {
    return { message: 'Some required fields are missing' };
  }

  if (!validateCategoryIds(data.categoryIds, categories)) {
    return { message: 'one or more "categoryIds" not found' };
  }

  const result = await createBlogPost(userId, data);

  await linkCategoriesToPost(result.id, data.categoryIds);

  return result;
};

module.exports = {
  createPost,
};
