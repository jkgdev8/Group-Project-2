const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const proRoutes = require('./pro-routes');


router.use('/users', userRoutes);
router.use('/profiles', proRoutes);


module.exports = router;
