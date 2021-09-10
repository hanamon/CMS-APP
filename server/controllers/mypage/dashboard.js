const userAuthen = require('../authentication/userAuthen');

module.exports = {
  get: async (req, res) => {
    try {
      // 관리자 인증 검사
      const userInfo = await userAuthen(req, res);

      delete userInfo.dataValues.user_pass;
      res.status(200).json({ data: { userInfo: userInfo.dataValues }, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
