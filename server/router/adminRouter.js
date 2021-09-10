const router = require('express').Router();
const controllers = require('../controllers');
const settingsRouter = require('./settingsRouter');

router.get('/', controllers.admin.dashboard);
router.get('/dashboard', controllers.admin.dashboard);
router.get('/posts', controllers.admin.posts.get);
router.get('/users', controllers.admin.users.get);
router.use('/settings', settingsRouter);

module.exports = router;
