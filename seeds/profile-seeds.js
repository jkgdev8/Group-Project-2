const sequelize = require('../config/connection');
const { Profile } = require('../models');

const profiledata = [
  {
    user_id: 1 ,
    subscription: 'Netflix',
    price: 14.99,
    date: 07/01/2022
    
  },
  
];

const seedProfile = () => Profile.bulkCreate(profiledata);

module.exports = seedProfile;
