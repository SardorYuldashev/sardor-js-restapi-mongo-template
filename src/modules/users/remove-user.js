const { NotFoundError, ForbiddenError } = require('../../shared/errors');
const User = require('./_User');

const removeUser = async ({ id }, user) => {
  const existing = await User.findById(id);

  if (!existing) {
    throw new NotFoundError('User topilmadi.');
  };

  return User.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = removeUser;