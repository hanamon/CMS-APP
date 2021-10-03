const router = require('express').Router();
const controllers = require('../controllers');
const mypageRouter = require('./mypageRouter');
const adminRouter = require('./adminRouter');

router.get('/logout', controllers.logout.get);
router.get('/login', controllers.login.get);
router.post('/login', controllers.login.post);
router.post('/signup', controllers.signup.post);

router.use('/mypage', mypageRouter);
router.use('/admin', adminRouter);

router.get('/users/:userId', controllers.users.get);

router.get('/category', controllers.category.get);

router.get('/posts', controllers.posts.get);
router.get('/posts/:userId', controllers.posts.get);
router.get('/posts/:userId/:postPath', controllers.posts.get);

module.exports = router;
