import styled from 'styled-components';

const Headding = styled.h2`
  padding: 20px;
  color: white;
  background-color: royalblue;
`;

function H2({ children }) {
  return (
    <Headding>
      {children}
    </Headding>
  );
}

export default H2;
