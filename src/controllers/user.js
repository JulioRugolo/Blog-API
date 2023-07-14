const { createToken } = require('../auth');
const userService = require('../services/user');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);

  const { displayName, email } = user.dataValues;
  const token = createToken({ name: displayName, email });
  
  return user === true
  ? res.status(409).json({ message: 'User already registered' })
  : res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (user.message) {
    return res.status(404).json(user);
  }

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};