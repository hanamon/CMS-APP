const db = require('../../db');

module.exports = async (req, res) => {
  const { type } = req.params;
  const admin_menu_query = `SELECT * FROM admin_menu where menu_path=?`;

  await db.query(admin_menu_query, [type], async (err, result) => {

    if( err ) return res.status(404).send('Not Found');
    if( !result.length ) return res.status(404).send('유효하지 않은 글 유형입니다.');

    const posts_query = `SELECT * FROM posts where post_type=?`;

    await db.query(posts_query, [type], (err, result) => {
      if( err ) return res.status(404).send('Not Found');
      if( !result.length ) return res.status(200).send('게시물이 없습니다.');
      res.status(200).send(result);
    });

  });
};
