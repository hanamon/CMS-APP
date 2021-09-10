const adminToken = require('./tokenFunctions/adminToken');
const { User } = require('../models');
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {
    try {
      // 관리자 인증 검사
      const userInfo = await adminToken(req, res);
      
      const queryKeys = Object.keys(req.query);
      const queryValues = Object.values(req.query);
      const postAttribu = User.rawAttributes;
      
      // 쿼리가 없는 경우 모든 users 리턴
      if( !queryKeys.length ) {
        const users = await User.findAll({ attributes: ['user_login', 'user_name', 'user_email', 'user_nickname', 'user_role', 'user_status', 'createdAt'] });
        return res.status(200).json({ data: { users }, message: 'ok' });
      }

      // 쿼리가 있는 경우 유효한 쿼리만 객체로 만들어서 배열에 담는다.
      const queryArr = queryKeys.reduce((acc, cur, idx) => {
        if( postAttribu[cur] ) {
          const obj = {};
          obj[cur] = queryValues[idx]
          return [...acc, obj];
        }
        return acc;
      }, []);

      // 배열에 담긴 쿼리에 해당하는 포스트를 찾아서 리턴한다.
      const users = await User.findAll({ where: { [Op.and]: queryArr }, attributes: ['user_login', 'user_name', 'user_email', 'user_nickname', 'user_role', 'user_status', 'createdAt'] });
      return res.status(200).json({ data: { users }, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
