const router = require('express').Router();
const controllers = require('../controllers');
const adminRouter = require('./adminRouter');

router.post('/login', controllers.user.login);
router.post('/signup', controllers.user.signup);
router.get('/mypage', controllers.user.mypage);
router.use('/admin', adminRouter);

module.exports = router;
