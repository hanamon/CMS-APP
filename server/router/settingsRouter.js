const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.admin.settings.general.get);
router.get('/general', controllers.admin.settings.general.get);

module.exports = router;
