const router = require('express').Router();
const controllers = require('../controllers');
const settingsRouter = require('./settingsRouter');

router.get('/', controllers.admin.dashboard.get);
router.get('/dashboard', controllers.admin.dashboard.get);
router.get('/posts', controllers.admin.posts.get);
router.get('/users', controllers.admin.users.get);
router.use('/settings', settingsRouter);

module.exports = router;
