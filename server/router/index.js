const router = require('express').Router();
const controllers = require('../controllers');

router.post('/login', controllers.login);
router.post('/signup', controllers.signup);
router.get('/mypage', controllers.mypage);
router.get('/admin', controllers.admin);
router.get('/admin/posts', controllers.posts);

module.exports = router;
