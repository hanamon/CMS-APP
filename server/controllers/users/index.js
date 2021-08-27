const router = require('express').Router();

router.get('/', (req, res) => {
  return res.status(200).send('사용자 화면!!!');
});

module.exports = router;
