const { User } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = {
  get: async (req, res) => {
    // 관리자 인증 검사
    const userInfo = await userAuthen(req, res);
  }
}
