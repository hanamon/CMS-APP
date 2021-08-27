import React from 'react';
import { Link } from 'react-router-dom';

function AdminMenu({ menus }) {
  return (
    <nav>
      <ul>
        {
          menus.map((menu, idx) => {
            return <li key={menu.ID}><Link to={'/admin/'+menu.menu_path}>{menu.menu_name}</Link></li>;
          })
        } 
      </ul>
    </nav>
  );
}

export default AdminMenu;
