import { Link } from 'react-router-dom';
import styled from "styled-components";

const MenuNav = styled.nav`
  background: skyblue;
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
  return (
    <MenuNav>
      <MenuUl>
        <MenuLi><MenuLink to='/mypage/dashboard'>대시보드</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/mypage/posts'>게시글</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/mypage/comments'>댓글</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/mypage/profile'>프로필</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/mypage/account'>계정</MenuLink></MenuLi>
      </MenuUl>
    </MenuNav>
  );
}

export default Nav;
