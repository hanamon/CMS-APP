const adminAnuthen = require('../authentication/adminAnuthen');

module.exports = {
  get: async (req, res) => {
    try {
      // 관리자 인증 검사
      const userInfo = await adminAnuthen(req, res);
      // 회원의 비밀번호를 삭제한다.
      delete userInfo.dataValues.user_pass;
      res.status(200).json({ data: {userInfo}, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
