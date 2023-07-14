const express = require('express');
const { createUser } = require('../controllers/user');
const validateUser = require('../middleware/validateUser');

const router = express.Router();

router.post('/', validateUser, createUser);

module.exports = router;
