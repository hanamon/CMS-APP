const adminToken = require('./tokenFunctions/adminToken');
const { Post } = require('../models');
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {
    console.log(req.query);
    try {
      // 관리자 인증 검사
      //const userInfo = await adminToken(req, res);
      
      let { paged, post_number, search } = req.query;
      const queryKeys = Object.keys(req.query);
      const queryValues = Object.values(req.query);
      
      // 페이지네이션 처리
      isNaN(paged) || Number(paged) < 1 ? paged = 1 : paged = Number(paged);
      isNaN(post_number) ? post_number = 5 : post_number < 1 ? post_number = 1 : post_number = Number(post_number);

      // 필드가 있는 쿼리만 객체로 만들어서 배열에 담는다.
      const queryArr = queryKeys.reduce((acc, cur, idx) => {
        if( Post.rawAttributes[cur] ) {
          const obj = {};
          obj[cur] = queryValues[idx]
          return [...acc, obj];
        }
        return acc;
      }, []);

      // DB에서 조건에 해당하는 POSTS를 찾는다.
      const posts = await Post.findAndCountAll({
        where: {
          [Op.and]: [
            // DB에서 검색 가능한 쿼리가 있는 경우 쿼리에 해당하는 포스트를 찾아서 리턴한다.
            ...queryArr,
            // DB에서 검색 가능한 쿼리가 없을 경우 기본 POST 타입으로 리턴한다.
            !queryArr ? { post_type: 'post' } : null,
            // SEARCH 쿼리가 있는 경우 관련 포스트를 찾아서 리턴한다.
            search ? { 
              [Op.or]: [
                { post_title: { [Op.like]: '%' + search + '%' } }, 
                { post_content: { [Op.like]: '%' + search + '%' } }
              ]
            } : null
          ]
        }, 
        offset: (paged-1)*post_number, 
        limit: post_number 
      });
      return res.status(200).json({ data: { posts }, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
