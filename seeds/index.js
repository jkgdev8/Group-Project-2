const seedUser = require('./user-seeds');
const seedProfile = require('./profile-seeds');


const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('--------------');
  await seedUser();
  console.log('--------------');

  await seedProfile();
  console.log('--------------');



  process.exit(0);
};

seedAll();




