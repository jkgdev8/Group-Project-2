// import all models
const Profile = require('./profile');
const User = require('./user');


// create associations
User.hasMany(Profile, {
  foreignKey: 'user_id'
});

Profile.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});



module.exports = { User, Profile };
