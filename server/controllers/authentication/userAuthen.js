const { isAuthorized, checkRefeshToken } = require('../tokenFunctions');
const { User } = require('../../models');

module.exports = async (req, res) => {
  try {
    // 헤더에 에세스토큰이 있는지 확인한다.
    const accessTokenData = isAuthorized(req);

    if( accessTokenData ) {
      const { user_login } = accessTokenData;
      const userInfo = await User.findOne({ where: { user_login } });
      if( !userInfo ) return res.status(401).json({ data: null, message: 'not authorized' });

      // 토큰이 유효하거나 권한이 있는 경우 사용자 정보를 리턴한다.
      return userInfo;
    }
    else {
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

      // 토큰이 유효하거나 권한이 있는 경우 사용자 정보를 리턴한다.
      return userInfo;
    }
  }
  catch (err) {
    console.error(err);
  }
}
