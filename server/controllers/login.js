const bcrypt = require('bcrypt');
const { User } = require('../models'); 
const { generateAccessToken, generateRefreshToken, sendRefeshToken, sendAccessToken, isAuthorized } = require('./tokenFunctions');

module.exports = {
  get: (req, res) => {
    // 이미 로그인 되어있는지 확인한다.
    const accessTokenData = isAuthorized(req);
    if( accessTokenData ) return res.status(301).redirect('/mypage');
    res.status(200).json({ message: 'ok' });
  },
  post: async (req, res) => {
    try {
      const { user_login, user_pass } = req.body;
  
      // 등록된 회원이 존재하는지 확인한다.
      const userInfo = await User.findOne({ where: { user_login } });  
      if( !userInfo ) return res.status(401).json({ data: null, message: 'not authorized' });
      
      // 등록된 회원이 존재한다면 비밀번호를 확인한다.
      const match = await bcrypt.compare(user_pass, userInfo.dataValues.user_pass);
      if( !match ) return res.status(401).json({ data: null, message: 'not authorized' });
  
      // 회원의 비밀 번호를 삭제한다.
      delete userInfo.dataValues.user_pass;
  
      // 토큰을 생성한다.
      const accessToken = generateAccessToken(userInfo.dataValues);
      const refreshToken = generateRefreshToken(userInfo.dataValues);
  
      // 응답을 보낸다.
      sendRefeshToken(res, refreshToken);
      sendAccessToken(res, accessToken);
    }
    catch(err) {
      console.error(err);
    }
  }
}
