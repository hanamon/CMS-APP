const adminToken = require('./tokenFunctions/adminToken');

module.exports = async (req, res) => {
  try {
    const userInfo = await adminToken(req, res);

    delete userInfo.dataValues.user_pass;
    res.status(200).json({ data: { userInfo: userInfo.dataValues }, message: 'ok' });
  }
  catch (err) {
    console.error(err);
  }
}
