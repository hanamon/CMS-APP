require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '15s' });
  },
  generateRefreshToken: (data) => {
    return jwt.sign(data, process.env.REFRESH_SECRET, { expiresIn: '30d' });
  },
  sendRefeshToken: (res, refreshToken) => {
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
  },
  sendAccessToken: (res, accessToken) => {
    res.status(200).json({ data: { accessToken }, message: 'ok' });
  },
  isAuthorized: (req) => {
    const authorization = req.headers['authorization'];
    if( !authorization ) return null;
    const accessToken = authorization.split(' ')[1];
    try {
      return jwt.verify(accessToken, process.env.ACCESS_SECRET);
    }
    catch (err) {
      return null;
    }
  },
  checkRefeshToken: (refreshToken) => {
    try {
      return jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    }
    catch (err) {
      return null;
    }
  }
}
