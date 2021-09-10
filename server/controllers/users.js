const adminToken = require('./tokenFunctions/adminToken');
const { User } = require('../models');
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {
    try {
      // 관리자 인증 검사
      //const userInfo = await adminToken(req, res);
      
      let { paged, post_number, search } = req.query;
      const queryKeys = Object.keys(req.query);
      const queryValues = Object.values(req.query);

      // 페이지네이션 처리
      isNaN(paged) || Number(paged) < 1 ? paged = 1 : paged = Number(paged);
      isNaN(post_number) ? post_number = 5 : post_number < 1 ? post_number = 1 : post_number = Number(post_number);
      
      // DB에서 필드가 존재하는 쿼리만 객체로 만들어서 배열에 담는다.
      const queryArr = queryKeys.reduce((acc, cur, idx) => {
        if( User.rawAttributes[cur] ) {
          const obj = {};
          obj[cur] = queryValues[idx]
          return [...acc, obj];
        }
        return acc;
      }, []);

      // DB에서 조건에 해당하는 POSTS를 찾는다.
      const users = await User.findAndCountAll({
        where: {
          [Op.and]: [
            // DB에서 검색 가능한 쿼리가 있는 경우 쿼리에 해당하는 유저를 찾아서 리턴한다.
            ...queryArr,
            // SEARCH 쿼리가 있는 경우 관련 유저를 찾아서 리턴한다.
            search ? { 
              [Op.or]: [
                { user_login: { [Op.like]: '%' + search + '%' } }, 
                { user_name: { [Op.like]: '%' + search + '%' } },
                { user_email: { [Op.like]: '%' + search + '%' } },
                { user_nickname: { [Op.like]: '%' + search + '%' } }
              ]
            } : null
          ]
        },
        attributes: ['user_login', 'user_name', 'user_email', 'user_nickname', 'user_role', 'user_status', 'createdAt'],
        offset: (paged-1)*post_number, 
        limit: post_number 
      });

      return res.status(200).json({ data: { users }, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
