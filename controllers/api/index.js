const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const proRoutes = require('./pro-routes.js');


router.use('/user', userRoutes);
router.use('/profile', proRoutes);


module.exports = router;
