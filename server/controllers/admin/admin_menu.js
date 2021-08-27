const db = require('../../db');

module.exports = async (req, res) => {
  const admin_menu_query = `SELECT * FROM admin_menu;`;
  await db.query(admin_menu_query, (err, result) => {
    if( err ) return res.status(404).send('Not Found');
    return res.status(200).json(result);
  });
};
