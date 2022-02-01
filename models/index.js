// import all models
const Profile = require('./Profile');
const User = require('./User');


// create associations
User.hasMany(Profile, {
  foreignKey: 'user_id'
});

Profile.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});



module.exports = { User, Profile};
