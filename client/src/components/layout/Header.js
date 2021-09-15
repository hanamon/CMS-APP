import styled from 'styled-components';
import MainNav from './MainNav';

const HeaderWrappter = styled.header`
  padding: 30px;
  background-color: blanchedalmond;
`;

function Header() {
  return (
    <HeaderWrappter>
      <MainNav/>
    </HeaderWrappter>
  );
}

export default Header;
