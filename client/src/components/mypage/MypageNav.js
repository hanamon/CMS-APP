import { Link } from 'react-router-dom';
import styled from "styled-components";

const MenuNav = styled.nav`
  padding: 30px;
  background: skyblue;
`;

const MenuUl = styled.ul`
  display: inline-block;
  padding: 7.5px;
  background-color: lightyellow;
`;

const MenuLi = styled.li`
  font-size: 1.2em;
`;

const CategoryLi = styled.li`
  font-size: 1em;
  padding: 10px 20px;
`;

const MenuLink = styled(Link)`
  display: block;
  color: black;
  line-height: 100%;
  padding: 10px 20px;
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
        <MenuLi><MenuLink to='/mypage/profile'>프로필</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/mypage/account'>계정</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/mypage/posts'>게시글</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/mypage/comments'>댓글</MenuLink></MenuLi>
      </MenuUl>
    </MenuNav>
  );
}

export default Nav;
