const router = require('express').Router();

const userRoutes = require('./api/user-routes.js');
const proRoutes = require('./api/pro-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api/user', userRoutes);
router.use('/api/profile', proRoutes);

module.exports = router;
