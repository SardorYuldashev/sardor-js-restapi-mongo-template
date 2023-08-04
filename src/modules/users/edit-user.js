const { NotFoundError } = require('../../shared/errors');
const User = require('./_User');
const bcrypt = require('bcryptjs')

const editUser = async ({ id, ...changes }) => {
  const existing = await User.findById(id);

  if (!existing) {
    throw new NotFoundError('Foydalanuvchi topilmadi.');
  }

  let changeValues = {};

  if (changes.password) {
    changeValues.password = await bcrypt.hash(changes.password, 10);
  };

  return User.findByIdAndUpdate(id, { ...changes, ...changeValues }, { new: true });
};

module.exports = editUser;