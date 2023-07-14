const { User } = require('../models');

const getByUserEmail = async (email) => User.findOne({
  where: { email },
});

const createUser = async ({ displayName, email, password, image }) => {
  const user = await getByUserEmail(email);

  if (user) {
    return true;
  }

  const createParams = { displayName, email, password, image: image || '' };
  return User.create(createParams);
};

const getAllUsers = async () => {
  const users = await User.findAll();

  const usersWithoutPassword = users.map(({ dataValues, ..._user }) => Object.fromEntries(
      Object.entries(dataValues).filter(([key]) => key !== 'password'),
    ));

  return usersWithoutPassword;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  if (user === null) {
    return {
      message: 'User does not exist',
    };
  }

  const { password, ...newUser } = user.dataValues;

  return newUser;
};

module.exports = {
  getByUserEmail,
  createUser,
  getAllUsers,
  getUserById,
};