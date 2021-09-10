const { User } = require('../../models'); 
const { generateAccessToken, generateRefreshToken, sendRefeshToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  try {
    const { user_login, user_pass } = req.body;
    const userInfo = await User.findOne({ where: { user_login, user_pass } });
    
    if( !userInfo ) return res.status(401).json({ data: null, message: 'not authorized' });
    
    delete userInfo.dataValues.user_pass;

    const accessToken = generateAccessToken(userInfo.dataValues);
    const refreshToken = generateRefreshToken(userInfo.dataValues);

    sendRefeshToken(res, refreshToken);
    sendAccessToken(res, accessToken);
  }
  catch(err) {
    console.error(err);
  }
}
