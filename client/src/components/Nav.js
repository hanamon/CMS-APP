import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const MenuNav = styled.nav`
  background: pink;
`;

const MenuUl = styled.ul`
  display: inline-block;
`;

const MenuLi = styled.li`
  display: inline-block;
  font-size: 1.2em;
`;

const MenuLink = styled(Link)`
  display: block;
  color: black;
  padding: 10px;
  &:hover {
    color: white;
    background: blueviolet;
  }
`

function Nav() {
  const state = useSelector((state) => state.menuItemsReducer);
  const [menus, setMenus] = useState([]);
  
  useEffect(() => {
    setMenus(state.value);
  }, []);

  return (
    <MenuNav>
      <MenuUl>
      { 
        menus.map((menu) => {
          return <MenuLi key={menu.menu_item_number}><MenuLink to={menu.menu_item_label}>{menu.menu_item_label}</MenuLink></MenuLi>
        })
      }
      </MenuUl>
    </MenuNav>
  );
}

export default Nav;
