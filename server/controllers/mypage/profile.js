const userAuthen = require('../authentication/userAuthen');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 회원의 비밀번호를 삭제한다.
      delete userInfo.dataValues.user_pass;
      return res.status(200).json({ data: { userInfo: userInfo.dataValues }, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
