const express = require('express');
const { createCategory } = require('../controllers/category');
const tokenValidationCategories = require('../middleware/validateTokenCategories');

const router = express.Router();

router.post('/', tokenValidationCategories, createCategory);

module.exports = router;
