const adminToken = require('./tokenFunctions/adminToken');
const { Post } = require('../models');
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {
    try {
      const userInfo = await adminToken(req, res);
      
      const queryKeys = Object.keys(req.query);
      const queryValues = Object.values(req.query);
      const postAttribu = Post.rawAttributes;
  
      // 쿼리가 없는 경우 기본 post 타입 리턴
      if( !queryKeys.length ) {
        const posts = await Post.findAll({ where: { post_type: 'post' } });
        return res.status(200).json({ data: { posts }, message: 'ok' });
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
      const posts = await Post.findAll({ where: { [Op.and]: queryArr } });
      return res.status(200).json({ data: { posts }, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
