const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = {
  post: async (req, res) => {
    try {
      let { user_login, user_pass, user_name, user_email } = req.body;
    
      const userInfo = { user_login: null, user_email: null };
      const userInfo_1 = await User.findOne({ where: { user_login } });
      const userInfo_2 = await User.findOne({ where: { user_email } });
    
      if( userInfo_1 ) userInfo['user_login'] = userInfo_1.dataValues.user_login;
      if( userInfo_2 ) userInfo['user_email'] = userInfo_2.dataValues.user_email;
      
      // 이미 등록된 아이디나 이메일일 경우
      if( userInfo['user_login'] || userInfo['user_email'] ) {
        return res.status(409).json({ data: { userInfo }, message: 'This information cannot be registered' });  
      }
    
      // 비밀번호 암호화
      const hash = await bcrypt.hash(user_pass, 10);
  
      // 새로운 회원 생성
      const newUser = await User.create({ user_login, user_pass : hash, user_name, user_email, user_display: user_login });
  
      // 비밀번호 제거 후 회원 정보 리턴
      delete newUser.dataValues.user_pass;
      res.status(201).json({ data: { userInfo: newUser.dataValues }, message: 'account has been successfully created' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
