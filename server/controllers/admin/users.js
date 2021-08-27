const db = require('../../db');

module.exports = async (req, res) => {
  const { postType } = req.params;

  const queryString = `SELECT * FROM users`;

  await db.query(queryString, (err, result) => {
    if( err ) console.log('err!');
    else res.status(200).send(result);
  });
};
