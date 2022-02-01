const seedUser = require('./user-seeds');
const seedProfile = require('./profile-seeds');


const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true});
    console.log('--------------');

  await seedUser();
    console.log('\n----- USERS SEEDED -----\n');
  
  await seedProfile();
    console.log('\n----- PROFILES SEEDED -----\n');
    
  process.exit(0);
};

seedAll();




