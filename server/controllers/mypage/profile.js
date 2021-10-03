const { User } = require('module');
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
  },
  put: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 변경할 회원 정보가 없다면 다음을 리턴한다.
      const { user_login, user_nickname } = req.body;
      if( !user_login || !user_nickname ) return res.status(400).json({ message: 'Bad Request' });

      // 변경이 가능하다면 변경한 후 변경 된 회원 정보를 반환한다.
      const newUserInfo = await User.update({ user_nickname }, { where: user_login });
      //if( result ) return res.status(409).json({ message: 'Conflict' });

      delete newUserInfo.dataValues.user_pass;
      res.status(201).json({ data: { userInfo: newUserInfo.dataValues }, message: 'ok' });
    }
    catch (err) {
      console.log(err);
    }
  }
}
