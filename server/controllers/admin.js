const { User } = require('../models');
const { isAuthorized } = require('./tokenFunctions');

module.exports = async (req, res) => {
  try {
    const accessTokenData = isAuthorized(req);
    if( !accessTokenData ) return res.status(401).json({ data: null, message: 'invalid access token' });
    
    const { user_login } = accessTokenData;
    const userInfo = await User.findOne({ where: { user_login } });
    
    if( !userInfo ) return res.status(401).json({ data: null, message: 'not authorized' });
    if( userInfo.dataValues.user_role !== 1 ) return res.status(403).json({ data: null, message: 'Forbidden' });

    delete userInfo.dataValues.user_pass;
    res.status(200).json({ data: { userInfo: userInfo.dataValues }, message: 'ok' });
  }
  catch (err) {
    console.error(err);
  }
}
