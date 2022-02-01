const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Profile , User } = require('../../models');

// get all profiles
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
    .then(dbprofiledata => res.json(dbprofiledata))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
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
      res.json(dbprofiledata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  if (req.session) {
    Profile.create({
      title: req.body.title,
      post_url: req.body.post_url,
      user_id: req.session.user_id
    })
      .then(dbprofiledata => res.json(dbprofiledata))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});


router.put('/:id', (req, res) => {
  Profile.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbprofiledata => {
      if (!dbprofiledata) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbprofiledata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Profile.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbprofiledata => {
      if (!dbprofiledata) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbprofiledata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
