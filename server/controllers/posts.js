const adminToken = require('./tokenFunctions/adminToken');
const { Post } = require('../models');
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {
    try {
      // 관리자 인증 검사
      //const userInfo = await adminToken(req, res);

      const queryKeys = Object.keys(req.query);
      const queryValues = Object.values(req.query);

      // 페이지네이션 처리
      let { paged, post_number } = req.query;
      isNaN(paged) || Number(paged) < 1 ? paged = 1 : paged = Number(paged);
      isNaN(post_number) ? post_number = 5 : post_number < 1 ? post_number = 1 : post_number = Number(post_number);
      
      // DB에서 검색 가능한 쿼리만 객체로 만들어서 배열에 담는다.
      const queryArr = queryKeys.reduce((acc, cur, idx) => {
        if( Post.rawAttributes[cur] ) {
          const obj = {};
          obj[cur] = queryValues[idx]
          return [...acc, obj];
        }
        return acc;
      }, []);

      if( !queryArr.length ) {
        // DB에서 검색 가능한 쿼리가 없는 경우 기본 타입을 리턴한다.
        const posts = await Post.findAndCountAll({ where: { post_type: 'post' }, offset: (paged-1)*post_number, limit: post_number });
        return res.status(200).json({ data: { posts }, message: 'ok' });
      }
      else {
        // DB에서 검색 가능한 쿼리가 있는 경우 쿼리에 해당하는 포스트를 찾아서 리턴한다.
        const posts = await Post.findAndCountAll({ where: { [Op.and]: queryArr }, offset: (paged-1)*post_number, limit: post_number });
        return res.status(200).json({ data: { posts }, message: 'ok' });
      }
    }
    catch (err) {
      console.error(err);
    }
  }
}
