const categoryService = require('../services/category');

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  try {
    const newCategory = await categoryService.createCategory(name);
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createCategory,
};
