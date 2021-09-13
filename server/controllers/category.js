const { Term, Terms_Taxonomy } = require('../models');

module.exports = {
  get: async (req, res) => {
    const { taxonomy } = req.query;
    if( !taxonomy ) return res.status(400).json({ message: 'Bad Request' });
    try {
      const category = await Terms_Taxonomy.findAll({
        where: { terms_taxonomy_path: taxonomy },
        attributes: ['terms_taxonomy_path', 'terms_taxonomy_description'],
        include: [
          {
            model: Term,
            attributes: ['term_name', 'term_path']
          }
        ],
        raw: true
      });
      // 쿼리로 들어온 텍사노미에 해당하는 카테고리를 리턴한다.
      res.status(200).json({ data: {category}, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
