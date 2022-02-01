const { Profile } = require('../models');

const profiledata = [
  {
    post_id: 1,
    subscription: 'Netflix',
    price: 14.99,
    date: 2022-01-01,
    user_id: 1

  },
  {
    post_id: 2,
    subscription: 'Disney',
    price: 14.99,
    date: 2022-01-01,
    user_id: 1
    
    
  },
  {
    post_id: 3,
    subscription: 'Hulu',
    price: 9.99,
    date: 2022-01-01,
    user_id: 1
  
  },
  {
    post_id: 4,
    subscription: 'Hulu',
    price: 9.99,
    date: 2022-01-02,
    user_id: 2
  
  },

  
  
];

const seedProfile = () => Profile.bulkCreate(profiledata);

module.exports = seedProfile;
