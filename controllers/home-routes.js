const router = require('express').Router();
const sequelize = require('../config/connection');
const { Profile, User} = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Profile.findAll({
    attributes: [
      'id',
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
    .then(dbprofiledata => {
      const profile = dbprofiledata.map(post => post.get({ plain: true }));

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

// get single post
router.get('/post/:id', (req, res) => {
  Profile.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
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
    .then(dbprofiledata => {
      if (!dbprofiledata) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbprofiledata.get({ plain: true });

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
