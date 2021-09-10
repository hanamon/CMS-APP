const router = require('express').Router();
const controllers = require('../controllers');
const optionsRouter = require('./optionsRouter');

router.get('/', controllers.admin.admin);
router.get('/posts', controllers.admin.posts.get);
router.get('/users', controllers.admin.users.get);
router.use('/options', optionsRouter);

module.exports = router;
