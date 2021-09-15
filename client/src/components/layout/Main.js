import styled from 'styled-components';

const MainTag = styled.main`
  background-color: pink;
`;

function Main({ children }) {
  return (
    <MainTag>
      {children}
    </MainTag>
  );
}

export default Main;
