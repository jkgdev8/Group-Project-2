const router = require('express').Router();
const sequelize = require('../config/connection');
const { Profile, User} = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    
    Profile.findAll({
      attributes: [
        'id',
        'subscription',
        'price',
        'date',
        'user_id',
        
      ],
      include: [
        
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbProfileData => {
        const Profiles = dbProfileData.map(Profile => Profile.get({ plain: true }));
        res.render('homepage', {
            Profiles,
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

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get('/Profile/:id', (req, res) => {
    Profile.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'subscription',
        'price',
        'date',
        'user_id',
      ],
      include: [
        { model: User,
          attributes: ['username']
        }
        ]
    })
      .then(dbProfileData => {
        if (!dbProfileData) {
          res.status(404).json({ message: 'No Profile found with this id' });
          return;
        }
  
        // serialize the data
        const Profile = dbProfileData.get({ plain: true });
  
        // pass data to template
        res.render('single-Profile', {
            Profile,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;