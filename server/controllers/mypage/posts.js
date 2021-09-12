const userAuthen = require('../authentication/userAuthen');
const { Post } = require('../../models');
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {
    // 로그인 인증 검사
    const userInfo = await userAuthen(req, res);

    const { post_type } = req.query;
    const queryKeys = Object.keys(req.query);
    const queryValues = Object.values(req.query);

    // DB에서 필드가 존재하는 쿼리만 객체로 만들어서 배열에 담는다.
    const queryArr = queryKeys.reduce((acc, cur, idx) => {
      if( Post.rawAttributes[cur] && queryValues[idx] !== 'all' ) {
        const obj = {};
        obj[cur] = queryValues[idx]
        return [...acc, obj];
      }
      return acc;
    }, []);

    // 해당 유저의 정보로 작성한 게시물을 조회한다.
    const { id } = userInfo.dataValues;
    const posts = await Post.findAndCountAll({
      where: {
        [Op.and]: [
          // DB에서 검색 가능한 쿼리가 있는 경우 쿼리에 해당하는 포스트를 찾아서 리턴한다.
          ...queryArr,
          // 기본은 해당 유저 정보로 조회한다.
          { post_author: id }
        ]
      }
    });

    // 회원의 비밀번호를 삭제한다.
    delete userInfo.dataValues.user_pass;

    res.status(200).json({ data: { posts, userInfo: userInfo.dataValues }, message: 'ok' });
  }
}
