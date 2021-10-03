const router = require('express').Router();
const controllers = require('../controllers');

// GET 요청
router.get('/', controllers.mypage.dashboard.get);
router.get('/dashboard', controllers.mypage.dashboard.get);
router.get('/posts', controllers.mypage.posts.get);
router.get('/comments', controllers.mypage.comments.get);
router.get('/profile', controllers.mypage.profile.get);
router.get('/account', controllers.mypage.account.get);

// PUT 요청
router.put('/profile', controllers.mypage.profile.put);

module.exports = router;
