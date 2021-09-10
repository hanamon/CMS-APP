const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.admin.options.general.get);
router.get('/general', controllers.admin.options.general.get);

module.exports = router;
