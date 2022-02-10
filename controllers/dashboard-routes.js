const router = require('express').Router();
const sequelize = require('../config/connection');
const { Profile , User } = require('../models');

router.get('/', (req, res) => {
    Profile.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
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
        // serialize data before passing to template
        const profiles = dbProfileData.map(profile => profile.get({ plain: true }));
        console.log("query result", profiles);
        res.render('dashboard', { profiles: profiles, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => {
      // serialize data before passing to template
      const users = dbUserData.map(user => user.get({ plain: true }));
      console.log("query result", users);
      res.render('dashboard', { users: users, loggedIn: true });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

  router.get('/:id', (req, res) => {
    Profile.findAll({
      where: {
        user_id: req.params.id
      },
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
        if (!dbProfileData) {
          res.status(404).json({ message: 'No Profile found with this id' });
          return;
        }
  
        // serialize the data
        const Profile = dbProfileData.get({ plain: true });
        console.log("query result", Profiles);

        res.render('edit-Profile', {
            Profile,
            loggedIn: true
            });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/create/', (req, res) => {
    Profile.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
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
        // serialize data before passing to template
        const Profiles = dbProfileData.map(Profile => Profile.get({ plain: true }));
        res.render('create-Profile', { Profiles, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;