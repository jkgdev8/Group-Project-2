const router = require('express').Router();
const sequelize = require('../config/connection');
const { Profile, User} = require('../models');

// get all profiles for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Profile.findAll({
    attributes: [
      'profile_id',
      'subscription',
      'price',
      'date',
      
    ],
    include: [
      
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbProfileData => {
      const profile = dbProfileData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        profile,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single profile
router.get('/:id', (req, res) => {
  Profile.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'profile_id:',
      'subscription',
      'price',
      'date',
    ],
    include: [
    
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbProfileData => {
      if (!dbdbProfileData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbProfileData.get({ plain: true });

      res.render('single-profile', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
