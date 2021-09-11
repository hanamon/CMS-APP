const { Menu_Item } = require('../models'); 

module.exports = {
  get: async (req, res) => {
    try {
      const menuItems = await Menu_Item.findAll({
        order: [['menu_item_number', 'ASC']]
      });
      res.status(200).json({ data: { menuItems }, message: 'ok' });
    }
    catch (err) {
      console.error(err);
    }
  }
}
