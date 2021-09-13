const { User, Post } = require('../models');

module.exports = {
  get: async (req, res) => {
    try {
      const { userId } = req.params;
    
      // 등록된 회원이 존재하는지 확인한다.
      const userInfo = await User.findOne({ where: { user_login: userId } });  
      if( !userInfo ) return res.status(401).json({ data: null, message: 'not authorized' });

      // 회원의 이메일과 비밀번호를 삭제한다.
      delete userInfo.dataValues.user_pass;
      delete userInfo.dataValues.user_email;
      return res.status(200).json({ data: { userInfo: userInfo.dataValues }, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
