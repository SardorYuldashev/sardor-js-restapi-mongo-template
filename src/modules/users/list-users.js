const User = require("./_User");

const listUsers = async ({ q, page = { limit: 5, offset: 0 }, sort = { by: 'first_name', order: 'asc' }, filters = {} }) => {

  if (q) {
    filters.first_name = { $regex: new RegExp(q, "i") };
  };

  const total = (await User.find({ ...filters })).length;

  const result = await User.find({ ...filters })
    .skip(page.offset)
    .limit(page.limit)
    .sort({ [sort.by]: sort.order });

  return { users: result, total, pageInfo: { ...page } };
};

module.exports = listUsers;