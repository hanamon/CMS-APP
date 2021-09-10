const { isAuthorized } = require('../tokenFunctions');
const { User } = require('../../models');

module.exports = async (req, res) => {
  try {
    const accessTokenData = isAuthorized(req);
    if( !accessTokenData ) return res.status(401).json({ data: null, message: 'invalid access token' });
    
    const { user_login } = accessTokenData;
    const userInfo = await User.findOne({ where: { user_login } });
    
    if( !userInfo ) return res.status(401).json({ data: null, message: 'not authorized' });
    if( userInfo.dataValues.user_role !== 0 ) return res.status(403).json({ data: null, message: 'Forbidden' });

    // 토큰이 유효하거나 권한이 있는 경우 사용자 정보를 리턴한다.
    return userInfo;
  }
  catch (err) {
    console.error(err);
  }
}
