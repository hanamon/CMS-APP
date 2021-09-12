const userAuthen = require('../authentication/userAuthen');
const { Post } = require('../../models');
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {
    // 로그인 인증 검사
    const userInfo = await userAuthen(req, res);

    const queryKeys = Object.keys(req.query);
    const queryValues = Object.values(req.query);

    // DB에서 필드가 존재하는 쿼리만 객체로 만들어서 배열에 담는다.
    const queryArr = queryKeys.reduce((acc, cur, idx) => {
      if( Post.rawAttributes[cur] ) {
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
        ]
      }
    });

    res.status(200).json({ data: { posts }, message: 'ok' });
  }
}
