const { Profile } = require('../models');
const moment = require('moment');


const profileData = [
  {
    id: 1,
    subscription: 'Netflix',
    price: 14.99,
    date: 5,
    user_id: 1

  },
  {
    id: 2,
    subscription: 'Disney',
    price: 14.99,
    date: 12,
    user_id: 1
    
    
  },
  {
    id: 3,
    subscription: 'Hulu',
    price: 9.99,
    date: 30,
    user_id: 1
  
  },
  {
    id: 4,
    subscription: 'Hulu',
    price: 9.99,
    date: 22,
    user_id: 2
  
  },
  {
    id: 5,
    subscription: 'Disney+',
    price: 14.99,
    date: 21,
    user_id: 6

  },


  
  
];

const seedProfile = () => Profile.bulkCreate(profileData);
//const seedProfile = () => Profile.bulkCreate(profileData, {individualHooks: true });

module.exports = seedProfile;
