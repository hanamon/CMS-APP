const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.admin.dashboard);
router.get('/posts', controllers.admin.posts);
router.get('/users', controllers.admin.users);
router.get('/options', controllers.admin.options);
router.get('/admin_menu', controllers.admin.admin_menu); // 사용자 역할에 따른 메뉴 전달

module.exports = router;
