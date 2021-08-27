const router = require('express').Router();
const posts = require('./posts');
const users = require('./users');
const options = require('./options');
const dashboard = require('./dashboard');
const admin_menu = require('./admin_menu');

router.get('/', dashboard);
router.get('/post_type/:type', posts);
router.get('/users', users);
router.get('/options', options);
router.get('/admin_menu', admin_menu); // 사용자 역할에 따른 메뉴 전달

module.exports = router;
