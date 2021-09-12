const { User, Post } = require('../models');

module.exports = {
  get: async (req, res) => {
    const { userId } = req.params;
    
    // 등록된 회원이 존재하는지 확인한다.
    const userInfo = await User.findOne({ where: { user_login: userId } });  
    if( !userInfo ) return res.status(401).json({ data: null, message: 'not authorized' });

    // 등록된 회원이 작성한 글을 확인한다.
    const posts = await Post.findAndCountAll({ where: { post_author: userInfo.dataValues.id } });
    console.log(posts);
    // 회원의 비밀 번호를 삭제한다.
    delete userInfo.dataValues.user_pass;
    return res.status(200).json({ data: { posts, userInfo: userInfo.dataValues }, message: 'ok' });
  }
}
