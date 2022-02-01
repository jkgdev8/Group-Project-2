
const { User } = require('../models');

const userdata = [
  {
    
    username: 'rob',
    email: 'rob@gmail.com',
    password: 'password'
    
  },
  {
    username: 'frank',
    email: 'frank@gmail.com',
    password: 'password'
    
  },
  {
    username: 'anthony',
    email: 'anthony@gmail.com',
    password: 'password'
  },
  {
    username: 'lebron',
    email: 'lebron@gmail.com',
    password: 'password'
  },
  {
    username: 'russell',
    email: 'russell@gmail.com',
    password: 'password'
  },
  {
    username: 'marcos',
    email: 'marcos@gmail.com',
    password: 'password'
  },
  {
    username: 'julienne',
    email: 'julienne@gmail.com',
    password: 'password'
  },
  {
    username: 'harry',
    email: 'harry@gmail.com',
    password: 'password'
  },
  {
    username: 'malik',
    email: 'malik@gmail.com',
    password: 'password'
  },
  {
    username: 'rossy',
    email: 'rossy@gmail.com',
    password: 'password'
  }
];

const seedUser = () => User.bulkCreate(userdata);
//const seedUser = () => User.bulkCreate(userdata, {individualHooks: true });
module.exports = seedUser;
