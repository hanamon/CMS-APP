import axios from 'axios';

const INIT_MENU_ITEMS_STATE = {
  value: []
};

try {
  axios.get('http://localhost:4000/menu-items')
  .then((res) => INIT_MENU_ITEMS_STATE.value = res.data.data.menuItems);
}
catch (err) {
  console.error(err);
}

export default INIT_MENU_ITEMS_STATE;
