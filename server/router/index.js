const router = require('express').Router();
const controllers = require('../controllers');
const mypageRouter = require('./mypageRouter');
const adminRouter = require('./adminRouter');

router.get('/signup', controllers.signup.get);
router.post('/signup', controllers.signup.post);

router.get('/login', controllers.login.get);
router.post('/login', controllers.login.post);

router.use('/mypage', mypageRouter);
router.use('/admin', adminRouter);

module.exports = router;
