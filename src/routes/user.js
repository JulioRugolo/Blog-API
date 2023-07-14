const express = require('express');
const { createUser, getAllUsers } = require('../controllers/user');
const validateUser = require('../middleware/validateUser');
const tokenValidation = require('../middleware/tokenValidator');

const router = express.Router();

router.post('/', validateUser, createUser);
router.get('/', tokenValidation, getAllUsers);

module.exports = router;
