const { User } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { user_login, user_pass, user_name, user_email } = req.body;
  
    const userInfo = { user_login: null, user_email: null };
    const userInfo_1 = await User.findOne({ where: { user_login } });
    const userInfo_2 = await User.findOne({ where: { user_email } });
  
    if( userInfo_1 ) userInfo['user_login'] = userInfo_1.dataValues.user_login;
    if( userInfo_2 ) userInfo['user_email'] = userInfo_2.dataValues.user_email;
    
    if( userInfo['user_login'] || userInfo['user_email'] ) {
      return res.status(409).json({ data: { userInfo }, message: 'This information cannot be registered' });  
    }
  
    const newUser = await User.create({ user_login, user_pass, user_name, user_email });
    delete newUser.dataValues.user_pass;
    
    res.status(201).json({ data: { userInfo: newUser.dataValues }, message: 'account has been successfully created' });
  }
  catch (err) {
    console.error(err);
  }
}
