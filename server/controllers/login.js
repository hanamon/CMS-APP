const bcrypt = require('bcrypt');
const { User } = require('../models'); 
const { generateAccessToken, generateRefreshToken, sendRefeshToken, sendAccessToken, isAuthorized, checkRefeshToken } = require('./tokenFunctions');

module.exports = {
  get: async (req, res) => {
    try {
      // 헤더에 에세스토큰이 있는지 확인한다.
      const accessTokenData = isAuthorized(req);
      if( accessTokenData ) return res.status(200).json({ data: { userInfo: refreshTokenData }, message: 'ok' });

      // 쿠키에 리프레쉬 토큰이 있는지 확인한다.
      const { refreshToken } = req.cookies;
      if( !refreshToken ) return res.status(403).json({ data: null, message: 'refresh token not provided' });
      
      // 리프레쉬 토큰이 유효한지 확인한다.
      const refreshTokenData = checkRefeshToken(refreshToken);
      if( !refreshTokenData ) return res.status(403).json({ data: null, message: 'invalid refresh token, please log in again' });

      // 리프레쉬 토큰 정보가 유효한지 확인한다.
      const { user_login } = refreshTokenData;
      const userInfo = await User.findOne({ where: { user_login } });
      if( !userInfo ) return res.status(403).json({ data: null, message: 'refresh token has been tempered' });

      // 회원의 비밀번호를 삭제한다.
      delete userInfo.dataValues.user_pass;
      
      // 새로운 에세스 토큰을 발급한다.
      const newAccessToken = generateAccessToken(userInfo.dataValues);
      sendAccessToken(res, newAccessToken, userInfo.dataValues);
    }
    catch (err) {
      console.error(err);
    }
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
  
      // 토큰을 발급한다.
      const refreshToken = generateRefreshToken(userInfo.dataValues);
      const accessToken = generateAccessToken(userInfo.dataValues);
      sendRefeshToken(res, refreshToken);
      sendAccessToken(res, accessToken, userInfo.dataValues);
    }
    catch(err) {
      console.error(err);
    }
  }
}
