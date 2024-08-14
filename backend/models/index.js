const sequelize = require('../config/database');
const Book = require('./Book');
const Owner = require('./Owner');
const User = require('./User');

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  Book,
  Owner,
  User,
};
