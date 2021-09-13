const router = require('express').Router();
const controllers = require('../controllers');
const mypageRouter = require('./mypageRouter');
const adminRouter = require('./adminRouter');

router.get('/logout', controllers.logout);
router.get('/login', controllers.login.get);
router.post('/login', controllers.login.post);
router.post('/signup', controllers.signup.post);

router.use('/mypage', mypageRouter);
router.use('/admin', adminRouter);

router.get('/:userId', controllers.users.get);

module.exports = router;
