const { User, Post, Term, Term_Relationship, Terms_Taxonomy } = require('../models');
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {
    try {
      const { userId, postPath } = req.params;
      const { post_type, category, search } = req.query;
      // 포스트를 필터링한다.
      const posts = await Post.findAndCountAll({
        where: {
          [Op.and]: [
            // 기본적으로 공개 글만 필터링한다.
            { post_status: 'publish' },
            // 쿼리로 글 유형이 들어온 경우 해당 글 유형으로 작성한 것만 필터링한다.
            post_type ? { post_type } : null,
            // 쿼리로 검색이 있는 경우 관련 포스트를 찾아서 리턴한다.
            search ? { 
              [Op.or]: [
                { post_title: { [Op.like]: '%' + search + '%' } }, 
                { post_content: { [Op.like]: '%' + search + '%' } }
              ]
            } : null
          ]
        },
        attributes: ['post_id', 'post_title', 'post_content', 'post_type', 'post_type', 'post_status', 'post_created'],
        include: [
          {
            model: User,
            attributes: ['user_id', 'user_login', 'user_display'],
            // params로 특정 유저의 아이디가 들어온 경우 해당 유저가 작성한 것만 필터링한다.
            where: userId ? { user_login: userId  } : {}
          },
          {
            model: Term_Relationship,
            required: true,
            attributes: [],
            include: [
              {
                model: Term,
                attributes: ['term_name', 'term_path'],
                where: category ? { term_path: category } : {}
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
      // 포스트를 리턴한다.
      return res.status(200).json({ data: { posts }, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
