const adminAnuthen = require('../authentication/adminAnuthen');

module.exports = async (req, res) => {
  try {
    // 관리자 인증 검사
    const userInfo = await adminAnuthen(req, res);

    delete userInfo.dataValues.user_pass;
    res.status(200).json({ data: { userInfo: userInfo.dataValues }, message: 'ok' });
  }
  catch (err) {
    console.error(err);
  }
}
