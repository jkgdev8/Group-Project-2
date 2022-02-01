const { Profile } = require('../models');
const moment = require('moment');
const date = moment().format();


const profileData = [
  {
    profile_id: 1,
    subscription: 'Netflix',
    price: 14.99,
    date: '2022-12-01',
    user_id: 1

  },
  {
    profile_id: 2,
    subscription: 'Disney',
    price: 14.99,
    date: '2022-10-01',
    user_id: 1
    
    
  },
  {
    profile_id: 3,
    subscription: 'Hulu',
    price: 9.99,
    date: '2022-11-01',
    user_id: 1
  
  },
  {
    profile_id: 4,
    subscription: 'Hulu',
    price: 9.99,
    date: '2022-10-01',
    user_id: 2
  
  },
  {
    profile_id: 5,
    subscription: 'Disney+',
    price: 14.99,
    date: '2022-10-01',
    user_id: 6

  },


  
  
];

const seedProfile = () => Profile.bulkCreate(profileData);
//const seedProfile = () => Profile.bulkCreate(profileData, {individualHooks: true });

module.exports = seedProfile;
