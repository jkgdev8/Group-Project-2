const { Profile } = require('../models');

const profiledata = [
  {
    user_id: 1 ,
    subscription: 'Netflix',
    price: 14.99,
    date_payment: 2022-01-01
    
  },
  {
    user_id: 2 ,
    subscription: 'Hulu',
    price: 9.99,
    date_payment: 2022-01-02
    
  },
  
  
];

const seedProfile = () => Profile.bulkCreate(profiledata, {individualHooks: true});

module.exports = seedProfile;
