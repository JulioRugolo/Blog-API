const express = require('express');
const { createUser, getAllUsers, getUserById } = require('../controllers/user');
const validateUser = require('../middleware/validateUser');
const tokenValidation = require('../middleware/tokenValidator');

const router = express.Router();

router.post('/', validateUser, createUser);
router.get('/', tokenValidation, getAllUsers);
router.get('/:id', tokenValidation, getUserById);

module.exports = router;
