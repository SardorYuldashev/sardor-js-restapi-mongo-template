const { hash } = require('bcryptjs');
const User = require('./_User');

const addUser = async (data) => {
  const hashedPassword = await hash(data.password, 10);

  const result = await User.create({ ...data, password: hashedPassword });

  return result;
};

module.exports = addUser;