const mongoose = require('mongoose');
const User = require('../src/modules/users/_User');
const config = require('../src/shared/config');
const bcrypt = require('bcryptjs');

mongoose
  .connect(`mongodb://${config.db.host}/${config.db.name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB ga ulandi.');
  })
  .catch((err) => {
    console.log('DB da xatolik: ', err);
  });

const seedUsers = [
  {
    first_name: "Sardor",
    last_name: "Yuldashev",
    username: "sardorbek",
    password: bcrypt.hashSync('123456', 10),
    is_deleted: false
  },
  {
    first_name: "Imron",
    last_name: "Abdusalimov",
    username: "imron",
    password: bcrypt.hashSync('1234', 10),
    is_deleted: false
  },
  {
    first_name: "Orzu Mirzayev",
    last_name: "Orzu Mirzayev",
    username: "orzu",
    password: bcrypt.hashSync('1234', 10),
    is_deleted: false
  },

];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
};

seedDB().then(() => {
  mongoose.connection.close();
});