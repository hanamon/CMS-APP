const { User, Post, Term, Term_Relationship, Terms_Taxonomy } = require('../models');

module.exports = {
  get: async (req, res) => {
    try {
      const { userId, postPath } = req.params;
      const { post_type } = req.query;

      const posts = await Post.findAndCountAll({
        // query로 글 유형이 들어온 경우 해당 글 유형으로 작성한 것만 필터링한다.
        where: post_type ? { post_type, post_status: 'publish' } : { post_status: 'publish' },
        attributes: ['post_id', 'post_title', 'post_content', 'post_type', 'post_type', 'post_status'],
        include: [
          {
            model: User,
            attributes: ['user_id', 'user_login', 'user_display'],
            // params로 특정 유저의 아이디가 들어온 경우 해당 유저가 작성한 것만 필터링한다.
            where: userId ? { user_login: userId  } : {}
          },
          {
            model: Term_Relationship,
            attributes: [],
            include: [
              {
                model: Term,
                attributes: ['term_name']
              },
              {
                model: Terms_Taxonomy,
                attributes: ['terms_taxonomy_path']
              }
            ]
          }
        ],
        raw: true
      });

      return res.status(200).json({ data: { posts }, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
