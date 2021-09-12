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
  return (
    <MenuNav>
      <MenuUl>
        <MenuLi><MenuLink to='/'>홈</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/blog'>블로그</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/project'>프로젝트</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/artwork'>작품</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/about'>소개</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/login'>로그인</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/signup'>회원가입</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/logout'>로그아웃</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/mypage'>마이페이지</MenuLink></MenuLi>
        <MenuLi><MenuLink to='/admin'>관리자</MenuLink></MenuLi>
      </MenuUl>
    </MenuNav>
  );
}

export default Nav;
