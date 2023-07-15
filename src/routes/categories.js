const express = require('express');
const { createCategory, getAllCategories } = require('../controllers/category');
const { tokenValidation } = require('../middleware/tokenValidator');

const router = express.Router();

router.post('/', tokenValidation, createCategory);
router.get('/', tokenValidation, getAllCategories);

module.exports = router;
