import styled from 'styled-components';

const Headding = styled.h1`
  padding: 30px;
  background-color: cadetblue;
`;

function H1({ children }) {
  return (
    <Headding>
      {children}
    </Headding>
  );
}

export default H1;
